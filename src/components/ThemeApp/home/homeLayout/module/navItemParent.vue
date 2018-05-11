<template>
    <div class="navItemParent-container">
        <vNavItem1 v-if="keyId ==='1'"></vNavItem1>
        <vNavItem2 v-if="keyId ==='2'"></vNavItem2>
        <vNavItem3 v-if="keyId ==='3'"></vNavItem3>
        <vNavItem4 v-if="keyId ==='4'"></vNavItem4>
        <vNavItem5 v-if="keyId ==='5'"></vNavItem5>
        <vNavItem6 v-if="keyId ==='6'"></vNavItem6>
        <vNavItem7 v-if="keyId ==='7'"></vNavItem7>
        <vNavItem8 v-if="keyId ==='8'"></vNavItem8>
        <vNavItem9 v-if="keyId ==='9'"></vNavItem9>
    </div>
</template>

<script>
    import vNavItem1 from './navItem-1';
    import vNavItem2 from './navItem-2';
    import vNavItem3 from './navItem-3';
    import vNavItem4 from './navItem-4';
    import vNavItem5 from './navItem-5';
    import vNavItem6 from './navItem-6';
    import vNavItem7 from './navItem-7';
    import vNavItem8 from './navItem-8';
    import vNavItem9 from './navItem-9';
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
            vNavItem5,
            vNavItem6,
            vNavItem7,
            vNavItem8,
            vNavItem9
        }
    }
</script>

<style lang="scss" scoped>
    .navItemParent-container {
        height: 100%;
    }
</style>