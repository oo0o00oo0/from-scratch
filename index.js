// https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
// https://webpack.js.org/guides/getting-started/
// https://webpack.js.org/concepts/

// https://medium.com/@agavitalis/setting-up-a-nodejs-express-application-with-babel-642fe0dd45a5
// https://stackoverflow.com/questions/43111618/transform-jsx-to-js-using-babel
// https://dev.to/lschwall/make-a-react-app-with-webpack-babel-and-express-30n8

// https://stackoverflow.com/questions/75222018/how-does-vite-compile-jsx-in-development
// https://medium.com/from-the-scratch/reactjs-intro-using-babel-on-the-fly-during-production-vs-compiling-during-development-3faa8a62b44b
// https://stackoverflow.com/questions/37904990/how-to-fix-babel-react-uncaught-syntaxerror-unexpected-token

// https://stackoverflow.com/questions/60358261/how-to-compile-jsx-server-side
// https://stackoverflow.com/questions/52805815/how-can-babel-be-used-without-bundler-but-with-a-dev-experience-similar-to-webp

import { fileURLToPath } from "url"
import path from "path"
import express from "express"
import cors from "cors"

import bodyParser from "body-parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

const publicDir = path.join(__dirname, "public")
const srcDir = path.join(__dirname, "src")
// const srcDir = path.join(__dirname, "dist")
// const distDir = path.join(__dirname, "dist")
// const publicDir = path.join(__dirname, "..", "public")
// const srcDir = path.join(__dirname, "..", "src")
// const entry = path.join(__dirname, "..", "index.html")

const entry = path.join(__dirname, "index.html")
const page = path.join(srcDir, "pages/statemanage.html")

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(publicDir))
app.use(express.static(srcDir))

app.get("/", (req, res) => {
  res.sendFile(entry)
  // res.send("hlly babel")
})

app.get("/statemanage", (req, res) => {
  // res.sendFile(page)
  res.send("routes")
})

app.listen(port, () => {
  console.log(srcDir)
  console.log(`Example app listening on port ${port}`)
})
