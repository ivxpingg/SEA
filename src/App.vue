<template>
  <div ref="app" class="app-container">
    455655
    <router-view></router-view>
  </div>

</template>

<script>
import Com from './libs/com';
export default {
    name: 'app',
    components: {
    },
    created(){
        console.log('created');
    },
    mounted() {


      this.$http({
          method: "post",
          url: '/xm/sys/login',
          data: {
              username: 'admin',
              password: '123456'
          }
      }).then(function (response) {
          console.dir(response);

      }).catch(function (error) {

      })

    }
}
</script>

<style scoped>
  .app-container {
    height: 100%;
  }
</style>
