<template>
  <div id="app">
    <NavBar/>
    <Search/>
    <Login/>
    <Resenya/>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import Login from './components/Login.vue';
import Resenya from './components/Resenya.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    Search,
    Login,
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
