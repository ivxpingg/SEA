<template>
    <div class="navItemParent-container">
        <vNavItem1 v-if="keyId ==='1'"></vNavItem1>
        <vNavItem2 v-if="keyId ==='2'"></vNavItem2>
        <vNavItem3 v-if="keyId ==='3'"></vNavItem3>
        <vNavItem4 v-if="keyId ==='4'"></vNavItem4>
        <vNavItem5 v-if="keyId ==='5'"></vNavItem5>
    </div>
</template>

<script>
    import vNavItem1 from './navItem-1';
    import vNavItem2 from './navItem-2';
    import vNavItem3 from './navItem-3';
    import vNavItem4 from './navItem-4';
    import vNavItem5 from './navItem-5';
    export default {
        name: "navItemParent",
        data() {
            return {};
        },
        props: {
            keyId: {
                type: String,
                default() {
                    return '1';
                }
            }
        },
        components: {
            vNavItem1,
            vNavItem2,
            vNavItem3,
            vNavItem4,
            vNavItem5
        }
    }
</script>

<style lang="scss" scoped>
    .navItemParent-container {
        height: 100%;
    }
</style>