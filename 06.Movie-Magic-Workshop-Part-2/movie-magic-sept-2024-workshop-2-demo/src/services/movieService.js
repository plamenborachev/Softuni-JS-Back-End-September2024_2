<<<<<<< HEAD
import Movie from '../models/Movie.js';

// TODO: Filter in db not in memory
const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } }); //$options: 'i' - case insensitive
        // moviesQuery.regex('title', new RegExp(filter.search, 'i'))
    }

    if (filter.genre) {
        moviesQuery.find({ genre: filter.genre.toLowerCase() });
        // moviesQuery.where('genre').equals(filter.genre.toLowerCase())
    }

    if (filter.year) {
        moviesQuery.find({ year: filter.year });
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
};

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, character) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } });
};

export default {
    getAll,
    create,
    getOne,
    attach,
}
=======
import Movie from '../models/Movie.js';

// TODO: Filter in db not in memory
const getAll = (filter = {}) => {
    let moviesQuery = Movie.find();

    if (filter.search) {
        moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } }); //$options: 'i' - case insensitive
        // moviesQuery.regex('title', new RegExp(filter.search, 'i'))
    }

    if (filter.genre) {
        moviesQuery.find({ genre: filter.genre.toLowerCase() });
        // moviesQuery.where('genre').equals(filter.genre.toLowerCase())
    }

    if (filter.year) {
        moviesQuery.find({ year: filter.year });
        // moviesQuery.where('year').equals(filter.year);
    }

    return moviesQuery;
};

const create = (movie) => Movie.create(movie);

const getOne = (movieId) => Movie.findById(movieId).populate('casts.cast');

const attach = (movieId, castId, character) => {
    // const movie = await Movie.findById(movieId);
    // movie.casts.push(castId);
    // return movie.save();

    return Movie.findByIdAndUpdate(movieId, { $push: { casts: { cast: castId, character } } });
};

export default {
    getAll,
    create,
    getOne,
    attach,
}
>>>>>>> 13d65fba2a04001160fc8a98cfff0fd202dbffaa
