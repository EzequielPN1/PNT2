<template>
    <div>
      <p>Nombre de destino: {{ mensaje.nombreDestino }}</p>
      <p>Nombre de emisor: {{ mensaje.nombreEmisor }}</p>
      <p>Contenido: {{ mensaje.contenido }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mensaje: {
        
          nombreDestino: "",
          nombreEmisor: "",
          contenido: ""
        }
      }
    
  };
  </script>