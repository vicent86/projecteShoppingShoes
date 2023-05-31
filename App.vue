<template>
  <div id="app">
    <NavBar/>
    <Search/>
    <Login/>
    <Resenya/>
    <ChatBot/>
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import Login from './components/Login.vue';
import Resenya from './components/Resenya.vue';
import ChatBot from './components/ChatBot.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    Search,
    Login,
    Resenya,
    ChatBot,

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
