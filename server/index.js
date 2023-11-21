const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
// Configurar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
  });
  
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
  });

