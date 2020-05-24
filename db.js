const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./creativeHouse.db");

db.serialize(function() {

  //? criando tabela
  db.run(`
          CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            decription TEXT,
            link TEXT
          );
        `)

  //? inserindo dados
  // const query = `
  //   INSERT INTO ideas(
  //     image,
  //     title,
  //     category,
  //     decription,
  //     link
  //   ) VALUES (?,?,?,?,?)
  // `

  // const values = [
  //   "https://image.flaticon.com/icons/svg/2972/2972230.svg",
  //   "Cursos online",
  //   "Estudo",
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus doloremque rem delectus? Officiis at consectetur dicta ratione dolorem officia, id voluptatem, delectus excepturi, sit sint laudantium exercitationem! Quidem, unde.",
  //   "https://rocketseat.com.br"
  // ]

  // db.run(query, values, function(err) {
  //   if (err) return console.log(err)

  //   console.log(this);
  // });

  //? consultar dados
  // db.all(`SELECT * FROM ideas`, function(err,rows) {
  //   if (err) return console.log(err)

  //   console.log(rows);
  // });

  //? deletar dados
  //!db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
  //!  if (err) return console.log(err)

  //!  console.log("DELETADO: ", this);
  //!});

});

module.exports = db;