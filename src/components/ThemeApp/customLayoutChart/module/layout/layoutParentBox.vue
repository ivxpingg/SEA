<template>
    <div class="layoutParentBox-container">
        <vLayout1 v-if="keyId === '1'" :isEdit="isEdit" :layoutData="layoutData"></vLayout1>
        <vLayout2 v-if="keyId === '2'" :isEdit="isEdit" :layoutData="layoutData"></vLayout2>
        <vLayout3 v-if="keyId === '3'" :isEdit="isEdit" :layoutData="layoutData"></vLayout3>
        <vLayout4 v-if="keyId === '4'" :isEdit="isEdit" :layoutData="layoutData"></vLayout4>
    </div>
</template>

<script>
    import vLayout1 from './layout-1';
    import vLayout2 from './layout-2';
    import vLayout3 from './layout-3';
    import vLayout4 from './layout-4';
    export default {
        name: "layoutParentBox",
        data() {
            return {
                layoutData: [],
                defaultLayoutData: {
                    layoutData_1: [{
                        className: 'lv1-item-idx-1',
                        navItemType: ''
                    }, {
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        lv2: [{
                            className: 'lv2-item-idx-1',
                            navItemType: ''
                        },{
                            className: 'lv2-item-idx-2',
                            navItemType: ''
                        }]
                    }],

                    layoutData_2: [{
                        className: 'lv1-item-idx-1',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-3',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-4',
                        navItemType: ''
                    }],

                    layoutData_3: [{
                        className: 'lv1-item-idx-1',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-3',
                        navItemType: ''
                    },{
                        className: 'lv1-item-idx-4',
                        navItemType: ''
                    }],

                    layoutData_4: [{
                        className: 'lv1-item-idx-1',
                        navItemType: '',
                        lv2: [{
                                className: 'lv2-item-idx-1',
                                navItemType: ''
                            },{
                                className: 'lv2-item-idx-2',
                                navItemType: ''
                            },{
                                className: 'lv2-item-idx-3',
                                navItemType: ''
                            }]
                    },{
                        className: 'lv1-item-idx-2',
                        navItemType: '',
                        lv2: [{
                            className: 'lv3-item-idx-1',
                            navItemType: ''
                        },{
                            className: 'lv3-item-idx-2',
                            navItemType: ''
                        }]
                    }]
                }
            };
        },
        components: {
            vLayout1,
            vLayout2,
            vLayout3,
            vLayout4
        },
        props: {
            // 布局类型
            keyId: {
                type: String,
                default() {
                    return '1';
                }
            },

            isEdit: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            pdata: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        watch: {
            keyId(val, oldVal) {
                this.layoutData = this.defaultLayoutData['layoutData_' + val];
            }
        },
        created() {

            if (this.pdata.length == 0) {
                this.layoutData = this.defaultLayoutData['layoutData_' + this.keyId];
            }
            else {
                this.layoutData = this.pdata;
            }
        },
        methods: {
            setEchart(id, attributeName) {
                var ls = this.layoutData;

                for (var i = 0; i < ls.length; i++) {

                    if (ls[i].lv2 && ls[i].lv2.length > 0) {

                        debugger
                        for(var j = 0; j < ls[i].lv2.length; j++) {
                            if (ls[i].lv2[j].className === attributeName) {
                                ls[i].lv2[j].navItemType = id;
                                return;
                            }
                        }

                    }
                    else {
                        if (ls[i].className === attributeName) {
                            ls[i].navItemType = id;
                            return;
                        }
                    }
                }
            },
            save() {}
        }
    }
</script>

<style lang="scss">
    .layoutParentBox-container {
        height: 100%;
    }
</style>