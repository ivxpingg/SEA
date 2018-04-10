<template>
    <div ref="app" class="app-container">
        <vHeader></vHeader>
        <router-view></router-view>
    </div>

</template>

<script>
    import vHeader from '../../components/ThemeApp/Layout/header/header';
    export default {
        name: "ThemeApp",
        components: {vHeader}
    }
</script>

<style scoped>

</style>