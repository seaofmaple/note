<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="content">
      <p>{{message}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  id: 'content'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
