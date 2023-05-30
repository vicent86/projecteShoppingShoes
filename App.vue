<template>
  <div id="app">
    <NavBar/>
    <Search/>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,

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
