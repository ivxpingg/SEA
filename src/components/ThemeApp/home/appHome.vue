<template>
    <div class="appHome-container">
        <vHeader @sub_onSwitchLayout="sub_onSwitchLayout"></vHeader>
        <div ref="subsystemPanel" class="subsystem-panel">
            <vNavLayout1 v-if="navLayoutType === '1'"></vNavLayout1>
            <vNavLayout2 v-if="navLayoutType === '2'"></vNavLayout2>
            <vNavLayout3 v-if="navLayoutType === '3'"></vNavLayout3>
        </div>
        <div @click="getData">获取数据</div>
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    .appHome-container {
        height: 100%;

        background: url('./images/home-bg.png') no-repeat top center;

        .subsystem-panel {
            margin: 0 auto;
            max-width: 1440px;
            min-width: 1340px;
            height: auto;
        }
    }
</style>