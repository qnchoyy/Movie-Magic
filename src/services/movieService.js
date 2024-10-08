const movies = [
    {
        title: 'The Little Marmaid',
        genre: 'Fantasy',
        director: 'Rob Marshall',
        date: '2023',
        imageUrl: 'img/the-little-mermaid.jpg',
        rating: '5',
        description: 'amazing',
    }
]

exports.getAll = () => {
    return movies.slice();
    //return [...movies]
}

exports.create = (movieData) => {
    console.log(movieData);
    movies.push(movieData);
}