const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let participants = [];

// Rota para cadastrar um novo P
app.post('/participants', (req, res) => {
  const participant = req.body;
  participants.push(participant);
  res.json(participant);
});

// Rota para obter a lista de todos os P cadastrados
app.get('/participants', (req, res) => {
  res.json(participants);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});