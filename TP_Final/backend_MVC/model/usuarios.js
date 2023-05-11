
import sqlite3 from "sqlite3";

// Crea una conexión a la base de datos
  const db = new sqlite3.Database("./BD/BaseDatosCopy.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Conectado a la base de datos.");
  });





  const registro = (email, nombre, pass) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO usuarios (email, nombre, pass) VALUES (?, ?, ?)`;
      db.run(sql, [email, nombre, pass], function (err) {
        if (err) {
          console.log(err);
          reject("Error al registrar usuario");
        } else {
          console.log(`Usuario registrado con id: ${this.lastID}`);
          resolve("Usuario registrado correctamente");
        }
      });
    });
  };


  const login = (email, pass) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM usuarios WHERE email = ? AND pass = ?`;
      db.get(sql, [email, pass], (err, row) => {
        if (err) {
          console.log(err);
          reject("Error en la autenticación");
        } else if (!row) {
          reject("Credenciales inválidas");
        } else {
          const nombre = row.nombre;
          console.log(nombre);
          resolve(nombre);
        }
      });
    });
  };


  const obtenerUsuarios = () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM usuarios", (err, rows) => {
        if (err) {
          console.error(err.message);
          reject("Error en la base de datos");
        } else {
          resolve(rows);
        }
      });
    });
  };



export default {
  registro,
  login,
  obtenerUsuarios
}