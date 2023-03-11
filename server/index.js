// https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
// https://webpack.js.org/guides/getting-started/
// https://webpack.js.org/concepts/

import { fileURLToPath } from "url"
import path from "path"
import express from "express"
import cors from "cors"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

const entry = path.join(__dirname, "..", "index.html")
const publicDir = path.join(__dirname, "..", "public")
const srcDir = path.join(__dirname, "..", "src")

app.use(cors())
app.use(express.static(publicDir))
app.use(express.static(srcDir))

app.get("/", (req, res) => {
  res.sendFile(entry)
})

app.get("/routes", (req, res) => {
  res.send("routes")
})

app.listen(port, () => {
  console.log(srcDir)
  console.log(`Example app listening on port ${port}`)
})
