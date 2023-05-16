import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sqlite3 from "sqlite3";


const app = express();
app.use(bodyParser.json());
app.use(cors());


//----------------------------------------------------------------------------------------------------------

// Crea una conexión a la base de datos
const db = new sqlite3.Database("./BD/BaseDatos.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Conectado a la base de datos.");
});

//----------------------------------------------------------------------------------------


// registro de usuarios
app.post("/register", (req, res) => {
  
  const email = req.body.email;
  const nombre = req.body.nombre;
  const pass = req.body.pass;

  const sql = `INSERT INTO usuarios (email, nombre, pass) VALUES (?, ?, ?)`;
  db.run(sql, [email, nombre, pass], function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error al registrar usuario");
    } else {
      console.log(`Usuario registrado con id: ${this.lastID}`);
      res.status(200).send("Usuario registrado correctamente");
    }
  });
});


//----------------------------------------------------------------------------------------------------------

// login de usuarios
app.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const sql = `SELECT * FROM usuarios WHERE email = ? AND pass = ?`;
  db.get(sql, [email, pass], (err, row) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error en la autenticación");
    } else if (!row) {
      res.status(401).send("Credenciales inválidas");
    } else {
      const nombre = row.nombre;
      console.log(nombre)
      res.status(200).json(nombre);
    }
  });
  
});


//----------------------------------------------------------------------------------------------------------

//Devuelve los usuarios
app.get("/usuarios", (req, res) => {
  db.all("SELECT * FROM usuarios", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Error en la base de datos.");
    } else {
      res.send(rows);
    }
  });
});

//----------------------------------------------------------------------------------------------------------


const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});










