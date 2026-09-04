const express = require('express'); //Parche 1 (Innecesario)
const app = express(); //Parche 1 (Innecesario)
const PORT = process.env.PORT || 3000; //Parche 1 (Innecesario)

app.get('/', (req, res) => {
  res.json({ mensaje: "Microservicio DevOps activo", estado: "OK", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
}); //Parche 1 (Innecesario)