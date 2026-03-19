const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

const mysql = require('mysql');

let conexao = mysql.createConnection({
  host: "108.179.193.209",
  user: "gutoxa27_alunos",
  password: "JD_eXLNHp1ZG",
  database: "gutoxa27_bd_loja"
})

conexao.connect(function (erro) {
  if (erro) {
    console.log("Deu ruim na conexão \n")
    throw erro;
  } else {
    console.log("Conexão deu bom \n")
  }
})


app.get("/produtos", function (req, res) {
  conexao.query("SELECT * FROM produtos order by id desc", function (erro, dados, campos) {
    res.json(dados)
  })
})

app.get("/produto/:id", function (req, res) {
  const id = req.params.id
  conexao.query("SELECT * FROM produtos where id = ? ", [id], function (erro, dados, campos) {
    res.json(dados)
  })
})

app.put("/produto/:id", function (req, res) {
  const id = req.params.id
  const data = req.body

  conexao.query(`UPDATE produtos set ? where id = ${id}`, [data], function (erro, resultado) {
    if (erro) {
      res.send(erro)
    }
    res.json({ "status": 200, "message": "Atualizado com sucesso!" })
  })
})

app.delete("/produto/:id", function (req, res) {
  const id = req.params.id
  conexao.query(`delete from produtos where id = ${id}`, function (erro, resultado) {
    if (erro) {
      res.send(erro)
    }
    res.json({ "status": 200, "message": "Excluído com sucesso!" })
  })
})

app.post("/produto/", function (req, res) {
  const data = req.body
  conexao.query('INSERT INTO produtos set ?', [data], function (erro, resultado) {
    if (erro) {
      res.send(erro)
    }
    res.send(resultado.insertId)
  });
})



let usuarios = ["paulo", "cris"]

app.get("/usuarios/", function (req, res) {
  res.send(usuarios)
})

app.post("/usuarios/", function (req, res) {
  const item = req.body.nome
  usuarios.push(item)
  res.send("Item adicionado com sucesso!")
})

app.put("/usuarios/:id", function (req, res) {
  const id = req.params.id - 1
  const novoItem = req.body.nome
  usuarios[id] = novoItem
  res.send("Item atualizado com sucesso!")
})

app.delete("/usuarios/:id", function (req, res) {
  const id = req.params.id - 1
  delete usuarios[id]
  res.send("Item removido com sucesso!")
}) 



app.listen(3000)