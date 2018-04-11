<template>
    <div class="layout-1-container">
        <div class="layout-panel">
            <div class="layout-panel-inner">
                <Row class="row" type="flex">
                    <div class="col flex1">
                        <div class="col-inner">
                            <div class="box box1"></div>
                            <div class="box box1 box-m-t-10"></div>
                        </div>
                    </div>
                    <div class="col flex2">
                        <div class="col-inner">
                            <div class="box box2"></div>
                        </div>
                    </div>
                </Row>
                <Row class="row" type="flex">
                    <div class="col flex1">
                        <div class="col-inner"><div class="box box1"></div></div>
                    </div>
                    <div class="col flex1">
                        <div class="col-inner"><div class="box box1"></div></div>
                    </div>
                    <div class="col flex1">
                        <div class="col-inner"><div class="box box1"></div></div>
                    </div>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout-1",
        data() {
            return {};
        }
    }
</script>

<style lang="scss" src="./style/layout.scss" scoped></style>
<style lang="scss" scoped>
    .layout-1-container {
        height: 100%;
        text-align: center;
    }
</style>