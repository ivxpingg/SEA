<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
    mounted() {

      this.$http({
          method: "post",
          url: '/xm/sys/login',
          data: {
              username: 'admin',
              password: '123456',
              mobileLogin: true
          }
      }).then(function (response) {

          console.dir(response);
      }).catch(function (error) {
          console.dir(error);
      })
    }
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
