import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from 'fs';


const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3001;



app.post("/Login", (req, res) => {

  const datos = fs.readFileSync('datos.txt', 'utf-8');
  let separadas = datos.split(' ');
  let usuario  = req.body.mail.toString();
  let pass = req.body.pass.toString();
  let existeUsuario = separadas.includes(usuario)
  let indice = separadas.indexOf(usuario)
  let passCorrecta = separadas[indice+1] == pass

  if (existeUsuario && passCorrecta) {
    res.status(200).json({ nombre: separadas[indice - 1] });
  } else {
    res.sendStatus(400); 
  }
}),


app.post("/register", (req, res) => {

  const datos = fs.readFileSync('datos.txt', 'utf-8');
  let separadas = datos.split(' ');
  let usuario  = req.body.mail.toString();
  let usuarioIndice = separadas.indexOf(usuario)
   
  if(usuarioIndice != -1 ){
    res.sendStatus(400);
  }else{
    res.sendStatus(200);
    const datos = req.body.nombre.toString()+' '+req.body.mail.toString()+' '+req.body.pass.toString()+' ';
    fs.appendFile('datos.txt', datos , (err) => {
      if (err) throw err;
      console.log('El archivo ha sido guardado.');
    });
  }
});



app.get("/users", (req, res) => {

  const datos = fs.readFileSync('datos.txt', 'utf-8');
  let separadas = datos.split(' ');
  let nombres=[];
  separadas.pop();

 for (let index = 0; index < separadas.length; index+=3) {
  const element = separadas[index];
    nombres.push(element);
 }

  res.json(nombres);
  
});




app.post("/EnviarMensaje", (req, res) => {

  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  let datos =  'from ' +req.body.nombreEmisor.toString() +'_to'+req.body.nombreDestino.toString()+ '_ ' +timeString + ' '+ req.body.contenido.toString() + '-'
    fs.appendFile('datos2.txt', datos , (err) => {
      if (err) throw err;
      res.sendStatus(200);
      console.log('El archivo ha sido guardado.');
    });
  }),



  app.post("/traerMensajes", (req, res) => {
    const datos = fs.readFileSync('datos2.txt', 'utf-8');
    let separados = datos.split('-');
    let mensajes=[];
    let nomUsuario = 'to'+req.body.userName.toString();

    separados.forEach(element => {
      
      if(element.includes(nomUsuario)){
      
        let mensajeFiltrado = element.split('_')

       mensajes.push(mensajeFiltrado[0]  + ' '+  mensajeFiltrado[2])
        
      }

    });

    res.json(mensajes);
   
  });



 
app.delete("/borrarMensajes", (req, res) => {

  const rutaArchivo = './datos2.txt';

  const datos = fs.readFileSync(rutaArchivo, 'utf-8');
  const separados = datos.split('-');
  let nomUsuario = 'to'+req.body.userName.toString();
  let mensajes=[];
  
  separados.forEach(element => {     
   if(!element.includes(nomUsuario)){   
    mensajes.push(element+'-')
   }

  });
  mensajes.pop()

  fs.truncate(rutaArchivo, 0, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al borrar el contenido del archivo');
    } else {
      res.status(200).send();
    }
  });

mensajes.forEach(element => {
    
  console.log(element)

  fs.appendFile(rutaArchivo, element, function (error) {
    if (error) throw error;
    console.log('Los datos se han agregado al archivo');
  });

 });

   mensajes=[]
   res.json(mensajes);
});













//-------------------------------------------------------------------------------------------------------------------------









app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





