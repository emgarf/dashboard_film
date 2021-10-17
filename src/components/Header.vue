<template>
  <header>
    <a href="./home"><img src="../assets/logo.svg" alt="logo"></a>
    <a class="link" href="./movies" title="liste des films">Liste des films</a>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

img {
  width: 150px;
  height: 50px;
}

.link {
  color: #ebedf6;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 0px;
  transition: width 0.3s;
  background-color: white;
  bottom: 0;
  left: 0;
}

.link:hover {
  color: #fff;
}

.link:hover::after {
  width: 100%;
}

/* For tablet & desktop */
@media screen and (min-width: 768px) {
  header {
    justify-content: left;
    padding: 20px 40px;
  }

  .link {
    margin-left: 30px;
  }
}

@media screen and (min-width: 1280px) {
  header {
    padding: 20px 0;
  }
}
</style>
