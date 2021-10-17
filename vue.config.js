module.exports = {
    pages: {
      index: {
        entry: './src/pages/index/main.js',
        template: 'public/index.html',
        title: 'Dashboard',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      movies: {
        entry: './src/pages/movies/main.js',
        template: 'public/index.html',
        title: 'Movies',
        chunks: ['chunk-vendors', 'chunk-common', 'movies']
      }
    }
  }