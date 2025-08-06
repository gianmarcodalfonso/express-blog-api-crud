const notFound = (req, res, next) => {
  res.status(204).json({
    error: "404 Not found",
    message: "Pagina non trovata"
  })
}

module.exports = notFound