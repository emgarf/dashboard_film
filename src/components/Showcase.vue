<template>
{{movies}}
    <ul class="showcase">
        <li class="showcase__movie" v-for="movie in movies" v-bind:key="movie">
            <img class="showcase__image" :src="movie">
        </li>
    </ul>
</template>

<script>
export default {
  name: 'Showcase',
  movies: []
}
</script>

<style scoped>

/* For tablet & desktop */
@media screen and (min-width: 768px) {
 
}

@media screen and (min-width: 1280px) {
 
}
</style>
