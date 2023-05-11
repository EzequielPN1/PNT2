import usuarios from "../model/usuarios.js"



const registro = (email, nombre, pass) => {
     return usuarios.registro(email, nombre, pass)
       .then(() => {
         return "Usuario registrado correctamente";
       })
       .catch(error => {
         console.log(error);
         throw new Error("Error al registrar usuario");
       });
   };
   
   const login = async (email, pass) => {
     try {
       const nombre = await usuarios.login(email, pass);
       console.log(nombre);
       return nombre;
     } catch (error) {
       console.log(error);
       throw new Error("Error en la autenticación");
     }
   };
   
   const obtenerUsuarios = () => {
     return usuarios.obtenerUsuarios()
       .then(usuarios => {
         return usuarios;
       })
       .catch(error => {
         console.log(error);
         throw new Error("Error al obtener los usuarios");
       });
   };
   
   export default {
     registro,
     login,
     obtenerUsuarios
   };





