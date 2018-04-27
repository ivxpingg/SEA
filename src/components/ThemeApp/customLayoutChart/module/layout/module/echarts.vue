<template>
    <div class="echarts-container">
        <div class="echart-panel" v-if="id !== ''" ref="echart">
            图表
        </div>
        <div class="empty" v-else>
            <i class="icon iconfont icon-tianjia"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "echarts",
        data() {
            return {};
        },
        props: {
            // 数据库唯一标识，用于获取数据。
            id: {
                type: String,
                default() {
                    return '';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .echarts-container {
        position: relative;
        height: 100%;

        .echart-panel {
            height: 100%;
        }

        .empty {
            position: relative;
            height: 100%;
            text-align: center;
            background-color: #cbcedc;

            .iconfont {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -75px;
                margin-left: -50px;
                font-size: 100px;
            }
        }
    }
</style>