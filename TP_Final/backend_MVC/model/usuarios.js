import  {db}  from './coneccionBD.js'



  const registro = (email, nombre, pass) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO usuarios (email, nombre, pass) VALUES (?, ?, ?)`;
      db.run(sql, [email, nombre, pass], function (err) {
        if (err) {
          console.log(err);
          reject("Error al registrar usuario");
        } else {
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
          resolve(row);
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


  
  const editarUsuario = (email, nombre) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE usuarios SET nombre = ? WHERE email = ?`;
      db.run(sql, [nombre, email], function(err) {
        if (err) {
          console.log(err);
          reject("Error en la autenticación");
        } else {
          db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], (err, row) => {
            if (err) {
              console.log(err);
              reject("Error en la autenticación");
            } else {
              resolve(row);
            }
          });
        }
      });
    });
  };


  
export default {
  registro,
  login,
  obtenerUsuarios,
  editarUsuario
}