const express = require('express');
const app = express();

app.use(express.json());

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta para registrar datos enviados por el usuario
app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

// Ruta para registrar incidencias reportadas por la comunidad
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});