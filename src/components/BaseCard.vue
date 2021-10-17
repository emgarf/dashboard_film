<template>
  <transition name="fade">
    <li class="movie" v-if="isVisible() === true">
      <img class="movie__image" :src="movie.poster_path">
    </li>
  </transition>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: ['movie', 'todisplay'],
  methods: {
    isVisible() {
      if (this.todisplay.length === 0) return true;
      return this.movie.id.some(r => this.todisplay.includes(r))
    }
  }
})
</script>

<style scoped>
.movie {
  display: flex;
  width: 155px;
  height: 155px;
  border-radius: 15px;
  overflow: hidden;
  list-style-type: none;
  box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 50%);
  transition: transform 0.2s;
}

.movie:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.movie__image {
  width: 100%;
  box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.5);
  object-fit: cover;
  object-position: top;
}

@media screen and (min-width: 1280px) {
  .movie {
    width: 260px;
    height: 260px;
  }
}
</style>
