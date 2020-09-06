// IMPORTAR A DEPENDÊNCIA DO SQLITE3
const sqlite3 = require("sqlite3").verbose()


// CRIAR O OBJETO QUE IRÁ FAZER OPERAÇÕES NO BANCO DE DADOS
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// module.exports = db
// UTILIZAR O OBJETO DE BANCO DE DADOS PARA AS NOSSAS OPERAÇÕES
db.serialize(() => {

  // COM COMANDOS SQL, EU VOU:

  // 1 - CRIAR UMA TABELA
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `)

  // 2 - INSERIR DADOS NA TABELA
  // const query = `
  //      INSERT INTO places (
  //         image,
  //         name,
  //         address,
  //         address2,
  //         state,
  //         city,
  //         items
  //       ) VALUES (?,?,?,?,?,?,?);
  //     `
  // const values = [
  //   "https://s3-alpha-sig.figma.com/img/ffe1/8625/5dd8d5f9a1f2ff3afacbc638233d8609?Expires=1592179200&Signature=GiMmIlCiWvwvggmbJ4k15AcC7h912sL1DiPu2hV5uapoy~UF9nbhA9UOZOxMBUScZZXsS-9Trv6cb~JwQ7p3sbOZTNLaZmR6KGMcHroxQPBcyAp0B9FiLH2dcplAScmwmu0nHatUG0vPLVqG1GRWAoSzbDuIjx1HCRg4~BCD195scYPTkrLepdxAxQ-kFOwhdv9VcU5CZv~rLydlmGbWNtWwo3I1XYdaihVof9q1FvfR30pGlTfoogjdu~36giHZ-X3pFJBlVEAwiDcU1bvU6~Vcs~8jMv9W9RtkTNGMrFVOqjVsCzzuS9FEHtriUW2CD29xA6SJkr9bQBODs4IRqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  //   "Colectoria",
  //   "Guilherme Gamballa, Jardim América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos, Lâmpadas"
  // ]

  // function afterInsertData(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)

  // }
  
  // db.run(query, values, afterInsertData)

  // 3 Consultar os dados da tabela
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)

  //   }
  //   console.log("Aqui estão seus registros:")
  //   console.log(rows)
  // })

  // 4 Deletar um dado da tabela
  // db.run(`DELETE FROM places WHERE id = ?`, [4], function (err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso!")
  // })





  // // 3 - CONSULTAR OS DADOS DA TABELA
  // db.all(`SELECT * FROM places`, function(err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Aqui estão os seus registros:")
  //   console.log(rows)

  // })

  // // 4 - DELETAR UM DADO DA TABELA
  // db.run(`DELETE FROM places WHERE id = ?`, [], function(err) {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log("Registro deletado com sucesso!")
  // })

})
