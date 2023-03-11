const App = function _App() {
  return `
      <h1 id="header">hello vanilla JS</h1>
      <div>example of state managment in vanilla JS</div>
      <div>count: ${_App.state.count}</div>
  `
}

App.state = {
  count: 0,
  increment: () => {
    setState(() => App.state.count++)
  },
}
const updateTree = () => {
  document.getElementById(`app`).innerHTML = App()

  document
    .getElementById("button")
    .addEventListener("click", App.state.increment)
}

const setState = (callback) => {
  callback()
  updateTree() // extracted function
}

updateTree()
