//importo i dati dei posts
const posts = require(`../data/posts.js`)

// definizione delle funzioni che verranno richiamate
//index
const index = (req, res) => {
  //recupero eventuale chiave
  const post = req.query.id;

  //definisco una variabile che contenga i post filtrati
  let filteredPosts = posts

  //verifico la richiesta
  if(post != undefined){
    //eseguo il filtraggio
    filteredPosts = posts.filter(item => item.post.includes(post.toLowerCase()))
  }

  res.json(filteredPosts)
}

//show
const show = (req, res) => {
  const id = parseInt(req.params.id)

  const post = posts.find(item => item.id === id)

  if(!post){
    return res.status(404).json({ error: "not found", message: "Post non trovato"});
  }

  res.json(post)
}

//store
const store = (req,res) => {
  res.send(`creazione di un nuovo post`)
}

//update
const update = (req,res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`)
}

//modify
const modify = (req,res) => {
  res.send(`Modifica parziale del post con id: ${req.params.id}`)
}

//destroy
const destroy = (req,res) => {
  const id = parseInt(req.params.id)

  const post = posts.find( item => item.id === id)

  posts.splice(post.indexOf(), 1);

  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}