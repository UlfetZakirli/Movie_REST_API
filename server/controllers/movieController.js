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
        res.json(movies)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}


