// cria servidor
// Vamos cria uma função na qual
// ela ira pegar o conteudo express da pg node_modules
const express = require("express")
const server = express()

// Pegar o banco de dados
const db = require("./database/db")

// Configura pasta publica
server.use(express.static("public"))

// Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})


// Configurar caminhos da minha aplicação
// Página inicial
// req: Requisição
// res: Resposta do servidor
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um titulo" })
})





server.get("/create-point", (req, res) => {

  // req.query: Query Strings da nossa url
  // console.logo(res.query)



  return res.render("create-point.html")


})

server.post("/savepoint", (req, res) => {

  // req.body: O corpo do nosso formulario
  // console.log(req.body)

  // Inserir dados no banco de dados

  //  2 - INSERIR DADOS NA TABELA
  const query = `
       INSERT INTO places (
          image,
          name,
          address,
          address2,
          state,
          city,
          items
        ) VALUES (?,?,?,?,?,?,?);
      `
  const values = [
      req.body.image,
      req.body.name,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})

  }

  db.run(query, values, afterInsertData)


  
})





server.get("/search-results", (req, res) => {
  //  Pegar  os dados do banco de dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)

    }
    // console.log("Aqui estão seus registros:")
    // console.log(rows)
    // Mostra a apgina html com os dados do banco de dados
    const total = rows.length
    return res.render("search-results.html", { places: rows, total: total })
  })




})


// Ligar o servidor
server.listen(3000)