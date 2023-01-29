const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')
const { listMovies, insertSingleMovie, updateSingleMovie, deleteSingleMovie } = movieController


router.get('/api/movies', listMovies)
router.post('/api/movies', insertSingleMovie)
router.patch('/api/movies/:id', updateSingleMovie)
router.delete('/api/movies/:id', deleteSingleMovie)

module.exports = router