<template>
  <div class="container">
    <Header/>
    
    <section class="main-movie">
      <h1 class="main-movie__title">KAAMELOTT</h1>
      <p class="main-movie__description">- Ouais c'est pas faux -</p>
    </section>

    <section>
      <ul class="movies">
        <BaseCard v-for="movie in movies" :key="movie" :movie="movie"/>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import BaseCard from '../../components/BaseCard.vue';

export default {
  name: 'App',
  components: {
    Header,
    BaseCard
  },
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    const base_url = "https://image.tmdb.org/t/p/";
    const image_width = "w342";
    const movies_to_display = '4';

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=481c25c2b716fb8857c4f4693b91554d&language=en-US&page=1")
      .then(response => response.json())
      .then(data => {
        for (const [index, result] of Object.entries(data.results)) {
          if (index === movies_to_display) break;

          this.movies.push(base_url + image_width + result.poster_path);
        }   
      });
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
  background-image: url('../../assets/affiche_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 120px 100px 100px rgb(0 0 0 / 80%);
}

@font-face {
  font-family: "kaamelott";
  src: url("../../assets/kaamelott.ttf");
}

/* Main movie part */
.main-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20vh;
}

.main-movie__title,
.main-movie__description {
  font-family: 'kaamelott', sans-serif;
  color: white;
  margin: 0;
}

.main-movie__title {
  font-size: 30px;
}

.main-movie__description {
  font-size: 16px;
}

/* Showcase part */
.movies {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 20px 50px;
  justify-content: space-evenly;
  margin: 0;
}

/* For tablet & desktop */
@media screen and (min-width: 768px) {
  .container {
    max-width: 1150px;
    margin: auto;
  }

  #app {
    box-shadow: inset 0 0 100px 100px rgba(0,0,0,0.8);
  }

  .main-movie {
    align-items: flex-start;
    padding-left: 50px;
    margin-top: 60px;
  }

  .main-movie__title {
    font-size: 60px;
  }

  .main-movie__description {
    font-size: 25px;
  }

  .movies {
    padding: 0 40px;
  }
}

/* For desktop */
@media screen and (min-width: 1280px) {
  .main-movie {
    padding-left: 0;
  }

  .movies {
    padding: 0 0 50px;
  }
}
</style>
