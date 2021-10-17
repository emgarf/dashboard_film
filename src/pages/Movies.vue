<template>
  <div class="container">
    <Header/>

    <section>
      <ul class="categories">
        <BaseFilter v-for="filter in filters" :key="filter.id" :filter="filter" @click="selectGenre(filter)"/>
      </ul>
    </section>

    <section>
      <p class="error" v-if="fetch_error !== ''">{{fetch_error}}</p>
      <ul class="movies">
        <BaseCard v-for="movie in movies" :key="movie.poster_path" :movie="movie" :todisplay="displayMovieCards()"/>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import BaseCard from '../components/BaseCard.vue';
import BaseFilter from '../components/BaseFilter.vue';

export default {
  name: 'App',
  components: {
    Header,
    BaseCard,
    BaseFilter
  },

  data() {
    return {
      filters: [],
      movies: [],
      genres_ids: [],
      fetch_error: "",
    }
  },

  mounted() {
    this.generateMovies();
    this.generateFilters();
  },

  methods: {
    generateMovies() {
      const base_url = "https://image.tmdb.org/t/p/";
      const image_width = "w342";
      const movies_to_display = '20';

      // fetch the top rated movies and store some datas in the "movies" list variable
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=481c25c2b716fb8857c4f4693b91554d&page=1")
        .then(response => response.json())
        .then(data => {
          for (const [index, result] of Object.entries(data.results)) {
            if (index === movies_to_display) break;

            this.genres_ids = [...this.genres_ids, ...result.genre_ids];

            // genreate the movies object
            this.movies.push({
              id: result.genre_ids,
              poster_path: base_url + image_width + result.poster_path
            });
          }
          // Make the values of the list unique
          this.genres_ids = [...new Set(this.genres_ids)];
        })
        .catch(() => {
          this.fetch_error = 'Un problème est survenu lors du chargement de vos films... :(';
        });
    },

    // fetch the genre datas and store some datas in the "filters" list variable
    generateFilters() {
      fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=481c25c2b716fb8857c4f4693b91554d&language=en-US")
      .then(response => response.json())
      .then(data => { 
        data.genres.forEach(element => {
          // genreate the filters object for the existing id of genres
          if (this.genres_ids.includes(element.id) === true) {
            this.filters.push({
              id: element.id,
              name: element.name,
              active: false
            });
          }
        })
        .catch(error => {
          console.log(error)
        });;
      })
    },

    // Get all the filters that are selected and return their id
    displayMovieCards() {
      const id = [];
      this.filters.forEach(filter => {
        if (filter.active === true) {
          id.push(filter.id);
        }
      });
      return id;
    },

    // Toggle the filter onclick
    selectGenre(filter) {
      filter.active = filter.active === false;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: #313131;
}

.error {
  color: white;
  width: 100%;
  padding: 20px 40px;
  font-size: 25px;
  text-align: center;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 20px 50px;
  justify-content: center;
  margin: 0;
}

.categories {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  margin-bottom: 40px;
  padding: 0 20px;
}

/* For tablet & desktop */
@media screen and (min-width: 768px) {
  .container {
    max-width: 1150px;
    margin: auto;
  }

  .movies,
  .categories {
    padding: 0 40px;
  }
}

/* For desktop */
@media screen and (min-width: 1280px) {
  .movies,
  .categories {
    padding: 0 0 50px;
  }
}
</style>
