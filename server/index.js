// https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
// https://webpack.js.org/guides/getting-started/
// https://webpack.js.org/concepts/

// https://medium.com/@agavitalis/setting-up-a-nodejs-express-application-with-babel-642fe0dd45a5
// https://stackoverflow.com/questions/43111618/transform-jsx-to-js-using-babel

import { fileURLToPath } from "url"
import path from "path"
import express from "express"
import cors from "cors"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

const publicDir = path.join(__dirname, "..", "public")
const srcDir = path.join(__dirname, "..", "src")

const entry = path.join(__dirname, "..", "index.html")
const page = path.join(srcDir, "pages/statemanage.html")

app.use(cors())
app.use(express.static(publicDir))
app.use(express.static(srcDir))

app.get("/", (req, res) => {
  res.sendFile(entry)
})

app.get("/statemanage", (req, res) => {
  res.sendFile(page)
  // res.send("routes")
})

app.listen(port, () => {
  console.log(srcDir)
  console.log(`Example app listening on port ${port}`)
})
