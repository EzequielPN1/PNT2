import usuarios from "../servicio/usuarios.js"


const registro = (req, res) => {
  const email = req.body.email;
  const nombre = req.body.nombre;
  const pass = req.body.pass;

  usuarios.registro(email, nombre, pass)
    .then(() => {
      res.status(200).send("Usuario registrado correctamente");
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error al registrar usuario");
    });
};

const login = (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  usuarios.login(email, pass)
    .then(usuario => {
      res.status(200).json(usuario);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error en la autenticación");
    });
};

const obtenerUsuarios = (req, res) => {
  usuarios.obtenerUsuarios()
    .then(usuarios => {
      res.status(200).json(usuarios);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error al obtener los usuarios");
    });
};

const editarUsuario = (req, res) => {
  const email = req.body.email;
  const nombre = req.body.nombre;
  usuarios.editarUsuario(nombre,email)
    .then((usuario) => {
      res.status(200).json(usuario);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("Error al editar usuario");
    });
};



export default {
  registro,
  login,
  obtenerUsuarios,
  editarUsuario 
}




