const Movie = require('../models/Movie');

exports.getAll = () => {
    const movies = Movie.find();

    return movies;
}

//TODO : filter result in mongoDB
exports.search = async (title, genre, year) => {
    let result = await Movie.find().lean();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        result = result.filter(movie => movies.year === year);
    }

    return result;
}

exports.getOne = (movieId) => Movie.findById(movieId);


exports.create = (movieData) => Movie.create(movieData);

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId }});

    const movie = this.getOne(movieId);

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(castId);

    return movie.save();


}
