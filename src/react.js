// stackoverflow.com/questions/43111618/transform-jsx-to-js-using-babel
// yarn babel src/react.js -d dist

/*
 * REACT
 */

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)

  const isProperty = (key) => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })

  element.props.children.forEach((child) => render(child, dom))

  container.appendChild(dom)
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

//

const Didact = {
  createElement,
  render,
}

/** @jsx Didact.createElement */
const element = (
  <div id="header">
    <h1>Now Refresh</h1>
  </div>
)
const container = document.getElementById("root")
Didact.render(element, container)

//  "scripts": {
//     "build": "yarn babel src/react.js -d dist",
//     "dev": "yarn build && nodemon index.js"
//   },

// "scripts": {
//   "build": "yarn babel src/react.js -d dist",
//   "dev": "nodemon index.js"
// },
