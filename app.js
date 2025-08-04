//Importo Express
const express = require(`express`);

// Definisco app
const app = express();

// Definiamo la porta d'ascolto del server
const port = 3000;

// Middleware per i file statici
app.use(express.static(`public`));

// importo il file router per i post
const postsRouter = require(`./routers/postsRouter.js`)

// Rotta base della nostra applicazione
app.get(`/`, (req, res) => {
  res.send(`Server del mio blog!`)
})

app.use(`/posts`,postsRouter);

// Porta d'ascolto del server
app.listen(port, () => {
  console.log(`Server del mio blog in ascolto alla porta ${port}!`)
})