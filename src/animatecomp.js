const element = {
  type: "h1",
  props: {
    title: "header",
    className: "off",
    id: "header",
    children: "simple",
  },
}

const renderButton = {
  type: "button",
  props: {
    id: "render",
    children: "Render",
  },
}

const render = () => {
  const container = document.getElementById("root")
  const node = document.createElement(renderButton.type)
  node["id"] = renderButton.props.id

  const text = document.createTextNode("")

  text["nodeValue"] = renderButton.props.children
  node.appendChild(text)
  container.appendChild(node)

  node.addEventListener("click", () => {
    if (document.getElementById("header")) {
      remove(container, document.getElementById("header"))
    } else {
      renderHeader()
    }
  })
}

const remove = (parent, node) => {
  // node.style.opacity = 0

  animate({
    duration: 500,
    timing: function (fractionOfTime) {
      return fractionOfTime
    },
    draw: function (progress) {
      console.log("draw")
      node.style.opacity = 1 - progress
    },
  })

  setTimeout(() => {
    parent.removeChild(node)
  }, 500)
}

const button = document.getElementById("render")

const renderHeader = () => {
  const container = document.getElementById("root")
  const node = document.createElement(element.type)

  node["title"] = element.props.title
  node["id"] = element.props.id
  node["className"] = element.props.className

  const text = document.createTextNode("")

  text["nodeValue"] = element.props.children

  node.appendChild(text)
  container.appendChild(node)

  setTimeout(() => {
    animate({
      duration: 500,
      timing: function (fractionOfTime) {
        return fractionOfTime
      },
      draw: function (progress) {
        console.log("draw")
        node.style.opacity = progress
      },
    })
  }, 0)
}

render()

////
function animate({ timing, draw, duration }) {
  console.log("animate")
  let start = performance.now()
  requestAnimationFrame(function animate(time) {
    let fractionOfTime = (time - start) / duration
    if (fractionOfTime > 1) {
      fractionOfTime = 1
    }
    let progress = timing(fractionOfTime)
    draw(progress)
    if (fractionOfTime < 1) {
      requestAnimationFrame(animate)
    }
  })
}
