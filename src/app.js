const change = () => {
  document.getElementById("header").innerHTML = "Hello World!"
}

setTimeout(() => {
  change()
}, 1000)
