module.exports = {
    pages: {
      home: {
        entry: './src/pages/home/main.js',
        template: 'public/index.html',
        title: 'Dashboard',
        chunks: ['chunk-vendors', 'chunk-common', 'home']
      },
      movies: {
        entry: './src/pages/movies/main.js',
        template: 'public/index.html',
        title: 'Movies',
        chunks: ['chunk-vendors', 'chunk-common', 'movies']
      }
    }
  }