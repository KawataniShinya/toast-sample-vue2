<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ExampleComponent />
    <i class="fa-solid fa-circle-exclamation"></i>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ExampleComponent from './components/ExampleComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ExampleComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
