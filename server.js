const express = require("express");

const server = express();

server.use(express.static("public"));

const nunjucks = require("nunjucks");

nunjucks.configure("views", {
  express: server,
  noCache: true
});

// Objetos 
const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2972/2972230.svg",
    title: "Cursos online",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus doloremque rem delectus? Officiis at consectetur dicta ratione dolorem officia, id voluptatem, delectus excepturi, sit sint laudantium exercitationem! Quidem, unde.",
    url:"https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2996/2996894.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus doloremque rem delectus? Officiis at consectetur dicta ratione dolorem officia, id voluptatem, delectus excepturi, sit sint laudantium exercitationem! Quidem, unde.",
    url:"https://rocketseat.com.br"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2991/2991637.svg",
    title: "Leitura",
    category: "Conhecimento",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus doloremque rem delectus? Officiis at consectetur dicta ratione dolorem officia, id voluptatem, delectus excepturi, sit sint laudantium exercitationem! Quidem, unde.",
    url:"https://www.amazon.com.br/Voc%C3%AA-fica-sozinho-vezes-sentido/dp/852543793X/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1SJAHKW77D62S&keywords=bukowski&qid=1590269664&sprefix=bu%2Caps%2C256&sr=8-2"
  },
  {
    img: "https://image.flaticon.com/icons/svg/3003/3003689.svg",
    title: "Aprender a cozinhar",
    category: "Lazer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus doloremque rem delectus? Officiis at consectetur dicta ratione dolorem officia, id voluptatem, delectus excepturi, sit sint laudantium exercitationem! Quidem, unde.",
    url:"https://www.udemy.com/course/curso-de-docinhos-saudaveis-sem-gluten-e-sem-lacteos/"
  },

]

server.get("/", function(req, res) {

  const reversedIdeas = [...ideas].reverse();

  let lastIdeas = [];

  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 3) {
      lastIdeas.push(idea);
    }
  }


  return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(req, res) {

  const reversedIdeas = [...ideas].reverse();

  return res.render("ideias.html", { ideas: reversedIdeas });
});

//? Ligando servidor na porta 3000
server.listen(3000);
