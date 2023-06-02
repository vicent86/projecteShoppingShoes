<template>
  <div id="app">
    <NavBar/>
    <Search/>
    <Resenya/>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import Resenya from './components/Resenya.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Search,
    Resenya,
   
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Arial;
}

#page-wrap {
  margin: auto;
  max-width: 800px;
  min-width: 100vh;

}
</style>
