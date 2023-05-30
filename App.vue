<template>
  <div id="app">
    <NavBar/>
    <Search/>
    <Login/>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Search,
    Login,

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
