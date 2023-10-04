const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  res.render('dados', { nome, endereco, telefone, dataAgendamento });
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

