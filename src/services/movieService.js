const movies = [
    {
        _id: 1,
        title: 'The Little Marmaid',
        genre: 'Fantasy',
        director: 'Rob Marshall',
        year: '2023',
        imageUrl: '/img/the-little-mermaid.jpg',
        rating: '5',
        description: 'amazing',
    }
]

exports.getAll = () => {
    // return movies.slice();
    return [...movies]
}

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);

    return movie;
}

exports.create = (movieData) => {

    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
}