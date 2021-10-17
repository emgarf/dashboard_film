<template>
  <div class="container">
    <Header msg="Welcome to Your Vue.js App"/>
    
    <section class="main-movie">
      <h1 class="main-movie__title">KAAMELOTT</h1>
      <p class="main-movie__description">- Ouais c'est pas faux -</p>
    </section>

    <section>
      <Showcase movies=""/>
      <ul class="showcase">
        <li class="showcase__movie" v-for="movie in movies" v-bind:key="movie">
          <img class="showcase__image" :src="movie">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Showcase from './components/Showcase.vue';

export default {
  name: 'App',
  components: {
    Header,
    Showcase
  },
  data() {
    return {
      movies: [],
      main_movie: ""
    }
  },
  mounted() {
    const base_url = "https://image.tmdb.org/t/p/";
    const image_width = "w342";

    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=481c25c2b716fb8857c4f4693b91554d&language=en-US&page=1")
      .then(response => response.json())
      .then(data => {
        data.results.forEach(result => {
          this.movies.push(base_url + image_width + result.poster_path)
        });
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
  box-sizing: border-box;
  min-height: 100vh;
  background-image: url('./assets/affiche_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 120px 100px 100px rgb(0 0 0 / 80%);
}

@font-face {
  font-family: "kaamelott";
  src: url("./assets/kaamelott.ttf");
}

/* Main movie part */
.main-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
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
.showcase {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 20px 50px;
  justify-content: space-evenly;
  margin: 0;
}

.showcase__movie {
  display: flex;
  width: 155px;
  height: 155px;
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 50%);
  transition: transform 0.2s;
}

.showcase__movie:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.showcase__image {
  width: 100%;
  border-radius: 5px;
  box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.5);
  object-fit: cover;
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

  .showcase {
    padding: 0 40px;
  }

  .showcase__movie {
    width: 200px;
    height: 200px;
  }
}

/* For desktop */
@media screen and (min-width: 1280px) {
  .main-movie {
    padding-left: 0;
  }

  .showcase {
    padding: 0 0 50px;
  }
}
</style>
