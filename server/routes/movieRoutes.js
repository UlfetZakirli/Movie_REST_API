const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const { listMovies } = movieController


router.get('/api/movies', listMovies)

module.exports = router