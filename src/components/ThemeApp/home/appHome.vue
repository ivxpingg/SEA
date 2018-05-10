<template>
    <div class="appHome-container" :class="'home_bg_' + skinType">
        <vHeader @sub_onSwitchLayout="sub_onSwitchLayout" @sub_onEditLayout="sub_onEditLayout" @sub_onSwitchSpin="sub_onSwitchSpin" :editLayout="editLayout" :skinType="skinType"></vHeader>
        <div ref="subsystemPanel" class="subsystem-panel">
            <vNavLayout1 v-if="navLayoutType === '1'" :editLayout="editLayout"></vNavLayout1>
            <vNavLayout2 v-if="navLayoutType === '2'" :editLayout="editLayout"></vNavLayout2>
            <vNavLayout3 v-if="navLayoutType === '3'" :editLayout="editLayout"></vNavLayout3>
        </div>

        <img src="images/home-bg1.png" alt="" style="opacity: 0">
        <img src="./images/home-bg2.png" alt="" style="opacity: 0">
        <img src="./images/home-bg3.png" alt="" style="opacity: 0">
        <img src="./images/home-bg4.png" alt="" style="opacity: 0">
        <img src="./images/home-bg5.png" alt="" style="opacity: 0">

    </div>
</template>

<script>
    import Sortable from 'sortablejs';
    import vNavLayout1 from './homeLayout/navLayout-1';
    import vNavLayout2 from './homeLayout/navLayout-2';
    import vNavLayout3 from './homeLayout/navLayout-3';
    import vHeader from './header/header';
    export default {
        name: "appHome",
        data() {
            return {
                navLayoutType: '1', // 布局类型['1'|'2'|'3']， 目前只有3个类型切换
                skinType: '1',
                editLayout: false
            };
        },
        components: {vHeader, vNavLayout1, vNavLayout2, vNavLayout3},
        mounted() {

        },
        methods: {
            getData() {
                var data = [];
                var lv1_item = document.querySelector('.nav-panel-lv1').childNodes;
                var navItemDom, lv2, lv2_item;


                for(var i = 0; i < lv1_item.length; i++) {
                    var lv1_data = {
                        className: lv1_item[i].className.replace('nav-item', '').trim()
                    };

                    lv2_item = lv1_item[i].querySelector('.nav-panel-lv2');

                    if (lv2_item && lv2_item.childNodes.length > 0) {
                        lv2_item = lv2_item.childNodes;
                        lv1_data.lv2 = [];

                        for(var j = 0; j < lv2_item.length; j++) {
                            var lv2_data = {
                                className: lv2_item[j].className.replace('nav-item', '').trim(),
                                navItemType: lv2_item[j].getAttribute('name')
                            };
                            lv1_data.lv2.push(lv2_data);
                        }
                    }
                    else {
                        lv1_data.navItemType = lv1_item[i].getAttribute('name')
                    }

                    data.push(lv1_data);
                }

                console.dir(data);
            },
            sub_onSwitchLayout() {
                if (this.navLayoutType === '1') {
                    this.navLayoutType = '2';
                }
                else if (this.navLayoutType === '2') {
                    this.navLayoutType = '3';
                }
                else if (this.navLayoutType === '3') {
                    this.navLayoutType = '1';
                }

                this.editLayout = false;
            },
            sub_onEditLayout() {
                this.editLayout = !this.editLayout;
            },
            sub_onSwitchSpin() {
                if (this.skinType === '1') {
                    this.skinType = '2';
                }
                else if (this.skinType === '2') {
                    this.skinType = '3';
                }
                else if (this.skinType === '3') {
                    this.skinType = '4';
                }
                else if (this.skinType === '4') {
                    this.skinType = '5';
                }
                else if (this.skinType === '5') {
                    this.skinType = '1';
                }

                this.editLayout = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .appHome-container {
        height: 100%;

        /*background: url('./images/home-bg.png') no-repeat top center;*/

        &.home_bg_1 {
            background: url('images/home-bg1.png') no-repeat top center;
        }
        &.home_bg_2 {
            background: url('./images/home-bg2.png') no-repeat top center;
        }
        &.home_bg_3 {
            background: url('./images/home-bg3.png') no-repeat top center;
        }
        &.home_bg_4 {
            background: url('./images/home-bg4.png') no-repeat top center;
        }
        &.home_bg_5 {
            background: url('./images/home-bg5.png') no-repeat top center;
        }


        .subsystem-panel {
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1340px;
            height: auto;
        }
    }
</style>