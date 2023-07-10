import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
