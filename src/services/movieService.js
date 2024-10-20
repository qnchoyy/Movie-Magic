const Movie = require('../models/Movie');
// const Cast = require('../models/Cast')

exports.getAll = () => {
    const movies = Movie.find();

    return movies;
}

//TODO : filter result in mongoDB
exports.search = (title, genre, year) => {
    let query = {}

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
}

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, { $set: movieData });

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId }});

    const movie = await this.getOne(movieId);
    // const cast = await Cast.findById(castId);

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(castId)

    return movie.save();
}

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);
