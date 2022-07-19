const express = require('express')
const app = express()
const port = 3000

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

app.get("*", (req, res) => {
  res.send("te has perdido :( lo sentimos")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})