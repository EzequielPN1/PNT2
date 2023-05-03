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

  let pass = req.body.pass.toString();


  let usuarioIndice = separadas.indexOf(usuario)
   
  let passIndice = separadas.indexOf(pass)

 
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





app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





