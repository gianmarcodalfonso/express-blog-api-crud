//importo i dati dei posts
const posts = require(`../data/posts.js`)

// definizione delle funzioni che verranno richiamate
//index
const index = (req, res) => {
  //recupero eventuale chiave
  const tag = req.query.tag;

  //definisco una variabile che contenga i post filtrati
  let filteredPosts = posts

  //verifico la richiesta
  if(tag){
    filteredPosts = posts.filter(item => {
      return item.tags.map(tag => tag.toLowerCase()).includes(tag.toLowerCase());
    })  }

  res.json(posts)
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
  const id = parseInt(req.params.id);

  const post = posts.find( item => item.id === id);

  posts.splice(posts.indexOf(post), 1);

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