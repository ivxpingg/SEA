<template>
  <div ref="app" class="app-container">

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
        // console.log('created');
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped>
  .app-container {
    height: 100%;
    overflow: hidden;
  }
</style>
