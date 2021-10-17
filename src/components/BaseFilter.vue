<template>
    <li class="category" :class="{ 'active': filter.active }">
        <span>{{filter.name}}</span>
    </li>
</template>

<script>
export default {
  props: ['filter'],
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

.category:hover,
.active {
    background-color: #fff;
    color: #2b2b2b;
}

.active:hover {
    background-color: #ebedf6;
}
</style>
