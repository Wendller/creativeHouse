const express = require("express");

const server = express();

const db = require("./db");

server.use(express.static("public"));
//? habilitar req.body
server.use(express.urlencoded({ extended: true }));

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
  express: server,
  noCache: true
});


server.get("/", function(req, res) {

  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err)

    const reversedIdeas = [...rows].reverse();

    let lastIdeas = [];

    for (let idea of reversedIdeas) {
      if (lastIdeas.length < 3) {
        lastIdeas.push(idea);
      }
    }


    return res.render("index.html", { ideas: lastIdeas });
  });

  
});

server.get("/ideias", function(req, res) {

  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) console.log(err)

    const reversedIdeas = [...rows].reverse();
  
    return res.render("ideias.html", { ideas: reversedIdeas });
  });

});

server.post("/", function(req, res) {
  
  //? inserindo dados
  const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      decription,
      link
    ) VALUES (?,?,?,?,?)
  `

  const values = [
    req.body.image,
    req.body.title,
    req.body.category,
    req.body.description,
    req.body.link
  ]

  db.run(query, values, function(err) {
    if (err) {
      console.log(err);

      return res.send("Erro no Banco de dados!");
    }

    return res.redirect("/ideias");
  });

});

//? Ligando servidor na porta 3000
server.listen(3000);
