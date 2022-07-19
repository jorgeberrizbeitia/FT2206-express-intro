const express = require('express')
const app = express()
const port = 3000


// hacemos algunas configuraciones
app.use(express.static("public")) // esto le indica a mi servidor que todos los archivos estaticos (css, imagenes, js, videos) estarán en la carpeta public
// middlewares => son rutas o configuraciones que ocurren antes de las rutas del servidor

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/profile", (req, res) => {
  res.send("Bienvenido a tu perfil")
})

app.get("/friends/all", (req, res) => {
  res.send("Estos son todos mis amigos: ....")
})

app.get("/friends/:name", (req, res) => {
  // let name = "caro"
  console.log(req.params) // { name: "caro" }
  // let name = req.params.name
  const {name} = req.params

  // console.log(name)
  if (name === "caro") {
    res.send("Esta es la información de mi amiga Caro")
  } else if(name === "ruth") {
    res.send("Esta es la información de mi amiga Ruth")
  } else {
    res.send("Lo siento, no tengo más amigos :(")
  }
})

app.get("/greet/:string/:number", (req, res) => {

  const {string, number} = req.params
  let stringToRepeat = string + " "

  let newStr = stringToRepeat.repeat(number)
  res.send(newStr)

})

// req.query
app.get("/search", (req, res) => {
  console.log(req.query)

  res.send("Estas tratando de buscar algo")
})  




app.get("/home", (req, res) => {

  // __dirname es el valor de la ruta absoluta hasta la posición actual del repositorio
  // console.log(__dirname)
  res.sendFile(__dirname + "/views/home.html")

})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})


// * es cualquier cosa que no haya sido capturada en una ruta previa.
app.get("*", (req, res) => {
  res.send("te has perdido :( lo sentimos")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})