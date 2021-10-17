<template>
    <li class="category">
        <span>{{genre}}</span>
    </li>
</template>

<script>
export default {
  props: ['genre'],
}
</script>

<style scoped>
.category {
    padding: 5px 10px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 10px;
    list-style-type: none;
    margin-bottom: 10px;
    background-color: #2b2b2b;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
}

.category:hover {
    background-color: #fff;
    color: #2b2b2b;
}

@media screen and (min-width: 1280px) {
  
}
</style>
