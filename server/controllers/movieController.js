require('../models/db')
const Movie = require('../models/movie')

exports.listMovies = async (req, res) => {

    const { limit = 10, page = 1, category, q } = req.query

    const limitRecords = parseInt(limit)
    const skip = (page - 1) * limit

    let query = {}
    if (q) {
        query = { $text: { $search: q } }
    }
    if (category) query.category = category;

    try {
        const movies = await Movie.find(query).limit(limitRecords).skip(skip);
        res.json({ page: page, limit: limitRecords, movies })
    } catch (err) {
        res.status(400).json({ message: err })
    }
}


exports.insertSingleMovie = async (req, res) => {
    const { name, description, category, thumbnail } = req.body
    const newMovie = new Movie({
        name,
        description,
        category,
        thumbnail
    })
    try {
        await newMovie.save()
        res.json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}


exports.updateSingleMovie = async (req, res) => {
    const { id } = req.params
    const name = req.body.name

    try {
        const updateMovie = await Movie.updateOne({ _id: id }, { name: name })
        res.json(updateMovie)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}


exports.deleteSingleMovie = async (req, res) => {
    const { id } = req.params

    try {
        const deleteMovie = await Movie.deleteOne({ _id: id })
        res.json(deleteMovie)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}
