<template>
    <div class="navItem-2-container" id="main">
        <div class="item-title">
            <span class="text">海洋生物科普公共服务组件</span>
        </div>


        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">

                <div class="swiper-slide" data-swiper-autoplay="11000">
                    <div class="level-panel level-panel-1">
                        <div class="top">
                            <div class="title" :class="'images-' + activePoint">{{currentPointInfo.name}}</div>
                            <div class="content" :class="'po-' + activePoint" v-html="currentPointInfo.classify">

                            </div>
                        </div>

                        <div class="point point1" :class="{'point-active': activePoint === '1'}" @click="onClick_link_goto(list.dm_sby.url)"></div>
                        <div class="point point2" :class="{'point-active': activePoint === '2'}" @click="onClick_link_goto(list.md_sby.url)"></div>
                        <div class="point point3" :class="{'point-active': activePoint === '3'}" @click="onClick_link_goto(list.qx_jql.url)"></div>
                        <div class="point point4" :class="{'point-active': activePoint === '4'}" @click="onClick_link_goto(list.rb_ldx.url)"></div>
                        <div class="point point5" :class="{'point-active': activePoint === '5'}" @click="onClick_link_goto(list.sqy.url)"></div>
                    </div>
                </div>

                <div class="swiper-slide" data-swiper-autoplay="12000">
                    <div class="level-panel level-panel-2" :class="{'map-xm': switch_hdy ==='1', 'map-dsd': switch_hdy === '2'}" >
                        <div class="xm-bg-panel">
                            <div class="point point1" @click="onClick_link_goto('http://xmsoc.com:20508/html/hdy/20180709/659.html')">宝珠岛</div>
                            <div class="point point2" @click="onClick_link_goto('http://xmsoc.com:20508/html/hdy/20180709/690.html')">鼓浪屿</div>
                            <div class="point point3" @click="onClick_link_goto('http://xmsoc.com:20508/html/hdy/20180709/667.html')">浯屿岛</div>
                            <div class="point point4" @click="onClick_link_goto('http://xmsoc.com:20508/html/hdy/20180627/203.html')">小嶝岛</div>
                        </div>
                        <div class="dsd-bg-panel">
                            <div class="point point5" @click="onClick_link_goto('http://xmsoc.com:20508/html/hdy/20180709/658.html')">东山岛</div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide" data-swiper-autoplay="9000">
                    <div class="level-panel level-panel-3">
                        <div class="xm-bg-panel"  :class="{'point-active': switch_kpg}">
                            <div class="bg"></div>
                            <!--<div class="point point1">贝壳梦幻世界</div>-->
                            <div class="point point2" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180627/238.html')">诚毅科技探索中心</div>
                            <div class="point point5" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180627/244.html')">厦门海底世界</div>
                            <div class="point point3" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180626/188.html')">厦门科技馆</div>
                            <div class="point point4" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180713/695.html')">福建海洋渔业科学馆</div>

                            <div class="title-panel">
                                <div class="title title2" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180627/238.html')">诚毅科技探索中心</div>
                                <div class="title title3" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180626/188.html')">厦门科技馆</div>
                                <div class="title title4" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180713/695.html')">福建海洋渔业科学馆</div>
                                <div class="title title5" @click="onClick_link_goto('http://xmsoc.com:20508/html/kpg/20180627/244.html')">厦门海底世界</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination">
                <!--<div class="list-item">海洋生物百科图鉴</div>-->
                <!--<div class="list-item">海洋科普馆</div>-->
                <!--<div class="list-item">海岛游</div>-->
            </div>

            <!-- 如果需要导航按钮 -->

            <!-- 如果需要滚动条 -->


            <!--<div class="list-panel">-->
                <!--<div class="list-item">海洋生物百科图鉴</div>-->
                <!--<div class="list-item">海洋科普馆</div>-->
                <!--<div class="list-item">海岛游</div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    import Utils from '../../../../../libs/utils';
    export default {
        name: "navItem-2",
        data() {
            return {
                mySwiper: null,
                setInterv_0: undefined,
                setInterv_1: undefined,
                setInterv_2: undefined,

                list: {
                    dm_sby: {
                        name: '玳瑁石斑鱼',
                        name_en: 'Longfin grouper,Rockfish grouper',
                        alias: '花鲙、花龟斑、格仔鱼 、花狗斑',
                        classify: '<span class="po"></span>鲈形目<br/><span class="po"></span>鮨科<br/><span class="po"></span>石斑鱼属',
                        feature: '体长椭圆形，侧扁而粗壮。头较大。眼中大，上侧位，眼间隔狭窄，前方中央稍凹。吻短。口中大，稍倾斜。上下颌约等长。上下颌前端各具2枚圆锥牙，两侧牙细尖；犁骨和腭骨均具绒毛状牙，舌面无牙。前鳃盖骨后缘具3条扁棘。背鳍1个，鳍棘部与鳍条部相连，无缺刻，具11条鳍棘，16~18条鳍条；臀鳍Ⅲ-8；腹鳍腹位，末端伸达肛门；胸鳍宽大，后端圆形，胸鳍长大于眼后的头长；尾鳍圆形。体被细小栉鳞；侧线鳞80~96枚。头部、体侧及背鳍、尾鳍有许多近六角形暗褐色大斑。',
                        habit: '暖水性中下层鱼类，栖息在内湾、岩礁海区。性情凶猛，以鱼类、虾类为食。具性转变，为先雌后雄。',
                        distribution: '分布于西太平洋区,由日本至澳大利亚。中国产于南海和台湾海峡。',
                        economics: '肉较嫩，味鲜美，为上等食用鱼类。一般以流刺网、延绳网及一支钓捕获。',
                        url: 'http://xmsoc.com:20508/html/swbk/20180711/691.html'
                    },
                    md_sby: {
                        name: '密点石斑鱼',
                        name_en: 'Brown spotted grouper,Brownspotted rockcod，Grouper',
                        alias: '乌背斑、乌带斑、石斑、过仔鱼、珠鲙',
                        classify: '<span class="po"></span>鲈形目<br/><span class="po"></span>鮨科<br/><span class="po"></span>石斑鱼属',
                        feature: '体长椭圆形，稍侧扁，背、腹缘弧形，被细栉鳞，侧线埋于皮下， 不明显。口大，上颌骨后端扩大，不为眶前骨遮盖。下颌略突，上颌外行牙较大，内列牙绒毛状，前端有一大犬牙和能倒向后方的牙丛，下颌为排列不规则的小牙，犁骨和腭骨牙绒毛状，舌面无牙。鳃耙粗大，排列稀松。背鳍具11条鳍棘，鳍棘与鳍条部无明显缺刻；臀鳍与背鳍鳍条部相对：尾鳍后缘弧形。体棕褐色，除吻部和胸部外，头侧和体侧布满近六角形网状斑，幼鱼时各鳍无网状斑纹，体侧具6条横带，体长35cm以上个体的横带渐消失。',
                        habit: '暖水性中下层鱼类，生活在多岩礁海区。以小鱼虾为主食。体长35~45cm时具性逆转，先雌后雄。体长多为20~30cm 。',
                        distribution: '分布于印度洋一西太平洋海域。中国见于东海、台湾海峡和南海。',
                        economics: '低脂肪、高蛋白、富含多种氨基酸、无机盐和铁、钙、磷及各种维生素的上等食用鱼，肉细嫩厚实、无肌间刺，味鲜美。常用烧、爆、清蒸、 炖汤等方法成菜，也可制鱼丸、鱼馅等，以清蒸食用最佳。',
                        url: 'http://xmsoc.com:20508/html/swbk/20180711/692.html'
                    },
                    qx_jql: {
                        name: '青星九棘鲈',
                        name_en: 'Coral hind,Vermilion grouper,Blue dpotted rock-cod',
                        alias: '青星九刺鮨、红鲙，红格仔、过鱼、红条、东星斑、蓝点红鲈',
                        classify: '<span class="po"></span>鲈形目<br/><span class="po"></span>鮨科<br/><span class="po"></span>九棘鲈属',
                        feature: '体长椭圆形，侧扁，被细小栉鳞，侧线完全，与背缘平行。眼小，口大，上颌向前伸出，末端伸达眼后缘下方。两颌前端具小犬牙，下颌内侧牙尖锐，可向内倒状，犁骨和腭骨牙绒毛状。前鳃盖骨后缘的细锯齿状不甚明显，鳃盖骨具3条扁平棘。背鳍具9条鳍棘，鳍棘部与鳍条部连续；臀鳍具3条鳍棘；腹鳍末端不伸达肛门；胸鳍中央鳍条较长；尾鳍后缘圆弧形。体橘红色至橙黄色，头部、体侧及奇鳍散布着带暗色边缘的蓝灰色小斑点，胸鳍橘黄色，腹鳍具蓝灰色边缘。',
                        habit: '暖水性中下层鱼类、栖息于岩礁底质、水质清澈的海域。常独游，但亦有以小群出现。以小鱼及甲壳类为主食、喜在清晨和午后觅食。体长25~35cm。',
                        distribution: '分布于印度-太平洋区海域。中国见于台湾海峡和南海。',
                        economics: '优质食用鱼类与观赏鱼类，经济价值高。肉质佳，味鲜美，清蒸、红烧或煮汤皆宜。多以一支钓、鱼枪或鱼笼捕获。',
                        url: 'http://xmsoc.com:20508/html/swbk/20180708/545.html'
                    },
                    rb_ldx: {
                        name: '日本囊对虾',
                        name_en: '',
                        alias: '斑竹虾、话虾、竹节虾、斑节虾',
                        classify: '<span class="po"></span>十足目<br/><span class="po"></span>对虾科<br/><span class="po"></span>囊对虾属',
                        feature: '体表光滑，体色由蓝色和棕色相间横斑排列。额角齿式（8~10）/（1~2）。头胸甲具明显中央沟，额角侧沟很深。第一触角鞭特短，短于其柄部。尾节有3对侧刺。',
                        habit: '暖水性种类，主要分布在水深100M以浅海域，栖息于泥质和泥沙海底，春夏季从外侧深水海区进入沿岸、港湾、河口的浅水区产卵，秋冬季移向深水海区生活。繁殖期在2~5月，以双壳类、虾类、多毛类等底栖生物为食。属大型虾类，成虾体长15~20cm。',
                        distribution: '分布于印度、马来西亚、菲律宾、泰国等，中国的南黄海、东海、台湾海峡和南海均有分布。',
                        economics: '日本囊对虾个体较大，经济价值高，为人们喜食的商品虾类。在自然海区，由于过度捕捞，现已不行程渔汛。为福建及台湾等地的主要养殖对象。',
                        url: 'http://xmsoc.com:20508/html/swbk/20180708/569.html'
                    },
                    sqy: {
                        name: '松球鱼',
                        name_en: 'pinecone fish',
                        alias: '凤梨鱼',
                        classify: '<span class="po"></span>金眼鲷目<br/><span class="po"></span>松球鱼科<br/><span class="po"></span>松球鱼属',
                        feature: '体高，侧扁，椭圆形。头大，前端圆形，被薄膜的黏液腔发达。口大，下位；上颌较长，下颌具卵圆形发光器。上下颌和腭骨均具绒毛状牙群，犁骨无牙。背鳍2个，鳍棘部与鳍条部不相连，具4~6条鳍棘，11~ 12条鳍条，以第二鳍棘最长，鳍条部后缘圆形；臀鳍与背鳍鳍条部同形；胸鳍短小，下侧位；腹鳍具l条鳍棘，3条鳍条，腹鳍棘强大，具活动关节，可伸达臀鳍起点；尾鳍凹形。体被骨板状大鳞，鳞片连成体甲，中央有棱突。侧线中侧位。体橙黄色。第二背鳍、臀鳍、腹鳍及尾鳍红色而微黄。各鳍边缘黑色。',
                        habit: '为暖水性底层鱼类。肉食性，主要以甲壳及小型鱼类为食。一般体长为8~10cm。',
                        distribution: '分布于印度-西太平区海域。中国的黄海、东海、台湾海峡、南海均有分布。',
                        economics: '福建沿海较为常见，为底拖网、张网等所捕获。鱼体可食部分不多，经济价值不高。常作为观赏鱼类。',
                        url: 'http://xmsoc.com:20508/html/swbk/20180708/518.html'
                    }
                },
                activePoint: '1',

                currentPointInfo: {
                    name: '玳瑁石斑鱼',
                    classify: '<span class="po"></span>鲈形目<br/><span class="po"></span>鮨科<br/><span class="po"></span>石斑鱼属'
                },

                //切换海岛游地图动画
                switch_hdy: 0,
                switch_hdy_time: 6000,

                //切换海洋科普馆
                switch_kpg: false
            };
        },
        watch: {
            activePoint(val) {
                switch (val) {
                    case '1':
                        this.currentPointInfo.name = this.list.dm_sby.name;
                        this.currentPointInfo.classify = this.list.dm_sby.classify;
                        break;
                    case '2':
                        this.currentPointInfo.name = this.list.md_sby.name;
                        this.currentPointInfo.classify = this.list.md_sby.classify;
                        break;
                    case '3':
                        this.currentPointInfo.name = this.list.qx_jql.name;
                        this.currentPointInfo.classify = this.list.qx_jql.classify;
                        break;
                    case '4':
                        this.currentPointInfo.name = this.list.rb_ldx.name;
                        this.currentPointInfo.classify = this.list.rb_ldx.classify;
                        break;
                    case '5':
                        this.currentPointInfo.name = this.list.sqy.name;
                        this.currentPointInfo.classify = this.list.sqy.classify;
                        break;
                }
            }
        },
        mounted() {
            this.initSwiper();
            this.initPoint();
            // 基于准备好的dom，初始化echarts实例
            // var myChart = echarts.init(document.getElementById('main'));
           // myChart.setOption(option);
        },
        methods: {
            initSwiper() {
                var that = this;

                this.mySwiper = new Swiper (this.$refs.swiper, {
                    // loop: true,
                    // effect: 'cube',
                    autoplay: {
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        renderBullet: function (index, className) {
                            className = className + ' bullet' + index;
                            var text = '';
                            switch(index){
                                case 0:text='海洋生物百科图鉴';break;
                                case 1:text='海岛游';break;
                                case 2:text='海洋科普馆';break;
                            }
                            return '<span class="' + className + '">' + text + '</span>';
                        }
                    },
                    on: {
                        slideChangeTransitionStart: function() {

                            switch (this.activeIndex) {
                                case 0:
                                    // 生物百科
                                    that.activePoint = '1';
                                    that.switch_hdy = '0';
                                    break;
                                case 1:

                                    // 海岛游动画
                                    that.switch_hdy = '1';
                                    that.switch_hdy_time = 6000;
                                    break;
                                case 2:
                                    that.switch_kpg = false;
                                    break;
                            }
                        },
                        slideChangeTransitionEnd: function(){
                            //切换结束时，告诉我现在是第几个slide
                            if( !Utils.isUndefined(that.setInterv_0) ) {
                                clearInterval(that.setInterv_0);
                            }

                            if( !Utils.isUndefined(that.setInterv_1) ) {
                                clearInterval(that.setInterv_1);
                            }

                            if( !Utils.isUndefined(that.setInterv_2) ) {
                                clearInterval(that.setInterv_2);
                            }

                            switch (this.activeIndex) {
                                case 0:
                                    // 生物百科
                                    that.activePoint = '1';
                                    that.setInterv_0 = setInterval(function () {
                                        switch (that.activePoint) {
                                            case '1': that.activePoint = '2'; break;
                                            case '2': that.activePoint = '3'; break;
                                            case '3': that.activePoint = '4'; break;
                                            case '4': that.activePoint = '5'; break;
                                            case '5': that.activePoint = '1'; break;
                                            default: that.activePoint = '1'; break;
                                        }
                                    }, 2000);
                                    break;
                                case 1:
                                    // 海岛游动画

                                    that.setInterv_1 = setInterval(function() {

                                       that.switch_hdy = that.switch_hdy === '1' ? '2' : '1';

                                        that.switch_hdy_time = that.switch_hdy === '1' ? 7000 : 2000;
                                    }, that.switch_hdy_time);
                                    break;
                                case 2:
                                    that.switch_kpg = true;
                                    break;
                            }
                        }
                    }
                });

            },

            initPoint() {
                var that = this;

                // 生物百科
                this.setInterv_0 = setInterval(function () {
                    switch (that.activePoint) {
                        case '1': that.activePoint = '2'; break;
                        case '2': that.activePoint = '3'; break;
                        case '3': that.activePoint = '4'; break;
                        case '4': that.activePoint = '5'; break;
                        case '5': that.activePoint = '1'; break;
                    }
                }, 2000);
            },

            // 链接跳转
            onClick_link_goto(url) {
                window.open(url);
            }
        }
    }
</script>
<style lang="scss" src="../style/navItem.scss" scoped></style>
<style lang="scss" >
    .navItem-2-container {
        height: 100%;
        background-color: rgba(255,255,255,0.06);
        font-size: 12px;
        line-height: 18px;

        .swiper-container {
            height: 100%;

            .swiper-slide {
                height: 100%;
                .level-panel {
                    height: 100%;
                    margin: 0 auto;
                    width: 460px;

                    &.level-panel-1 {
                        position: relative;
                        padding: 46px 24px 0;
                        height: 100%;
                        background: url('./images/navItem2/xm_map1.png') no-repeat center;
                        background-origin: content-box;
                        background-size: contain;
                        background-position: 40px 20px;

                        .top {
                            position: absolute;
                            top: 46px;
                            left: 24px;
                            right: 0;
                            bottom: 0;
                            color: rgb(118, 228, 255);
                            text-align: left;
                            .title {
                                box-sizing: border-box;
                                display: inline-block;
                                height: 80px;
                                min-width: 120px;
                                padding-top: 50px;
                                font-size: 16px;
                                line-height: 30px;
                                background-size: auto 50px;
                                background-repeat: no-repeat;
                                background-position: left top;
                                transition: all 0.5s;


                                &.images-1 {
                                    /*color: #;*/
                                    background-image: url('./images/navItem2/md_sby.png');
                                }
                                &.images-2 {
                                    background-image: url('./images/navItem2/dm_sby.png');
                                }
                                &.images-3 {
                                    background-image: url('./images/navItem2/qx_jcl.png');
                                }
                                &.images-4 {
                                    background-image: url('./images/navItem2/rb_ldx.png');
                                }
                                &.images-5 {
                                    background-image: url('./images/navItem2/sqy.png');
                                }

                            }

                            .content {
                                width: 100px;
                                .po {
                                    margin-right: 3px;
                                    display: inline-block;
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 50%;
                                    transition: all 0.5s;
                                }

                                &.po-1 {
                                    .po {
                                        background-color: #76e4ff;
                                    }
                                }
                                &.po-2 {
                                    .po {
                                        background-color: #ed7462;
                                    }
                                }
                                &.po-3 {
                                    .po {
                                        background-color: #86cab4;
                                    }
                                }
                                &.po-4 {
                                    .po {
                                        background-color: #efde67;
                                    }
                                }
                                &.po-5 {
                                    .po {
                                        background-color: #d963ea;
                                    }
                                }
                            }
                        }

                        .point{
                            position: absolute;
                            width: 50px;
                            height: 50px;
                            background-size: 50% 50%;
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: all 0.5s;
                            transform-origin: center bottom;
                            cursor: pointer;

                            &.point1 {
                                top: 43%;
                                left: 73%;
                                background-image: url('./images/navItem2/dm_sby_point.png');
                            }
                            &.point2 {
                                top: 52%;
                                left: 62%;
                                background-image: url('./images/navItem2/md_sby_point.png');
                            }
                            &.point3 {
                                top: 65%;
                                left: 50%;
                                background-image: url('./images/navItem2/qx_jcl_point.png');
                            }
                            &.point4 {
                                top: 80%;
                                left: 55%;
                                background-image: url('./images/navItem2/rb_ldx_point.png');
                            }
                            &.point5 {
                                top: 75%;
                                left: 30%;
                                background-image: url('./images/navItem2/sqy_point.png');
                            }

                            &.point-active {
                                background-size: 100% 100%;
                            }
                        }
                    }

                    &.level-panel-2 {
                        position: relative;
                        height: 100%;
                        overflow: hidden;

                        .xm-bg-panel {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            transform: translate3d(100%, -100%, 0);
                            background-image: url('./images/navItem2/hdy-xm.png');
                            background-repeat: no-repeat;
                            background-origin: content-box;
                            background-size: 80% auto;
                            background-position: center bottom;
                            transition: all 0.5s;

                            .point {
                                box-sizing: border-box;
                                position: absolute;
                                padding-bottom: 35px;
                                width: 50px;
                                height: 60px;
                                line-height: 25px;
                                background-size: 70% auto;
                                background-repeat: no-repeat;
                                background-position: center bottom;
                                transform-origin: center bottom;
                                transform: translate3d(0, -3000px, 0);
                                cursor: pointer;
                                &.point1 {
                                    top: 33%;
                                    left: 12%;
                                    background-image: url('./images/navItem2/dm_sby_point.png');

                                }
                                &.point2 {
                                    top: 50%;
                                    left: 7%;
                                    background-image: url('./images/navItem2/md_sby_point.png');

                                }
                                &.point3 {
                                    top: 80%;
                                    left: 19%;
                                    background-image: url('./images/navItem2/qx_jcl_point.png');

                                }
                                &.point4 {
                                    top: 28%;
                                    left: 64%;
                                    background-image: url('./images/navItem2/rb_ldx_point.png');

                                }
                            }
                        }

                        &.map-xm {
                            .xm-bg-panel {
                                transform: translate3d(0, 0, 0);
                                .point{
                                    animation-duration: 1.25s;
                                    animation-name: bounceInDown;
                                    animation-fill-mode: forwards;
                                    &.point1 {
                                        animation-delay: 0.5s;
                                    }
                                    &.point2 {
                                        animation-delay: 1.5s;
                                    }
                                    &.point3 {
                                        animation-delay: 2.5s;
                                    }
                                    &.point4 {
                                        animation-delay: 3.5s;
                                    }
                                }
                            }
                        }

                        .dsd-bg-panel {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            transform: translate3d(-100%, 100%, 0);
                            background-image: url('./images/navItem2/hdy-dsd.png');
                            background-repeat: no-repeat;
                            background-origin: content-box;
                            background-size: 80% auto;
                            background-position: center bottom;
                            transition: all 0.5s;

                            .point {
                                position: absolute;
                                margin-bottom: 35px;
                                width: 50px;
                                height: 60px;
                                line-height: 25px;
                                background-size: 70% auto;
                                background-repeat: no-repeat;
                                background-position: center bottom;
                                transform-origin: center bottom;
                                transform: translate3d(0, -3000px, 0);
                                cursor: pointer;
                                &.point5 {
                                    top: 30%;
                                    left: 40%;
                                    background-image: url('./images/navItem2/sqy_point.png');
                                }
                            }

                        }

                        &.map-dsd {
                            .dsd-bg-panel {
                                transform: translate3d(0, 0, 0);

                                .point {
                                    animation-duration: 1.25s;
                                    animation-name: bounceInDown;
                                    animation-fill-mode: forwards;

                                    &.point5{
                                        animation-delay: 0.5s;
                                    }
                                }
                            }
                        }
                    }

                    &.level-panel-3 {
                        position: relative;
                        height: 100%;
                        overflow: hidden;
                        .xm-bg-panel {
                            box-sizing: border-box;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;

                            .bg {
                                position: absolute;
                                top: 0;
                                left: 0;
                                padding-top: 35px;
                                width: 100%;
                                height: 100%;
                                background-image: url('./images/navItem2/xm-bg-kpg.png');
                                background-repeat: no-repeat;
                                background-origin: content-box;
                                background-size: 80% auto;
                                background-position: center center;
                                overflow: hidden;
                            }

                            .point {
                                box-sizing: border-box;
                                position: absolute;
                                padding-bottom: 35px;
                                width: 30px;
                                height: 60px;
                                line-height: 25px;
                                background-size: 42px auto;
                                background-repeat: no-repeat;
                                background-position: center bottom;
                                transform-origin: center bottom;
                                opacity: 0;
                                color: transparent;
                                z-index: 1;
                                cursor: pointer;

                                transition-property: all;
                                transition-duration: 0.2s;
                                /*&.point1 {*/
                                    /*top: 61%;*/
                                    /*left: 10%;*/
                                    /*background-image: url('./images/navItem2/dm_sby_point.png');*/

                                /*}*/
                                &.point2 {
                                    top: 42%;
                                    left: 35%;
                                    background-image: url('./images/navItem2/md_sby_point.png');

                                }
                                &.point4 {
                                    top: 57%;
                                    left: 26%;
                                    background-image: url('./images/navItem2/qx_jcl_point.png');

                                }
                                &.point5 {
                                    top: 61%;
                                    left: 21%;
                                    background-image: url('./images/navItem2/rb_ldx_point.png');

                                }
                                &.point3 {
                                    top: 55%;
                                    left: 33%;
                                    background-image: url('./images/navItem2/sqy_point.png');
                                }

                            }

                            .title-panel {
                                position: absolute;
                                top: 55px;
                                left: 24px;
                                right: 0;
                                overflow: hidden;

                                .title {
                                    position: relative;
                                    padding-left: 16px;
                                    font-size: 12px;
                                    line-height: 20px;
                                    color: #FFF;
                                    text-align: left;
                                    transition: all 0.5s;
                                    opacity: 0;
                                    cursor: pointer;

                                    &:after {
                                        position: absolute;
                                        left: 0;
                                        top: 6px;
                                        width: 8px;
                                        height: 8px;
                                        content: " ";
                                        border-radius: 50%;
                                        background-color: #FFF;
                                    }

                                    &.title2 {

                                        &:after {
                                            background-color: #ed7462;
                                        }
                                    }
                                    &.title4 {
                                        &:after {
                                            background-color: #86cab4;
                                        }
                                    }
                                    &.title5 {
                                        &:after {
                                            background-color: #efde67;
                                        }
                                    }
                                    &.title3 {
                                        &:after {
                                            background-color: #d963ea;
                                        }
                                    }

                                }
                            }

                            &.point-active {
                                .point {
                                    &.point2 {
                                        opacity: 1;
                                        transition-delay: 0.5s;
                                    }
                                    &.point3 {
                                        opacity: 1;
                                        transition-delay: 2.5s;
                                    }
                                    &.point4 {
                                        opacity: 1;
                                        transition-delay: 4.5s;
                                    }
                                    &.point5 {
                                        opacity: 1;
                                        transition-delay: 6.5s;
                                    }

                                }

                                .title-panel {
                                    .title {
                                        &.title2 {
                                            opacity: 1;
                                            transition-delay: 0.5s;
                                        }
                                        &.title3 {
                                            opacity: 1;
                                            transition-delay: 2.5s;
                                        }
                                        &.title4 {
                                            opacity: 1;
                                            transition-delay: 4.5s;
                                        }
                                        &.title5 {
                                            opacity: 1;
                                            transition-delay: 6.5s;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }

    }


    @keyframes bounceInDown {
        from,
        60%,
        75%,
        90%,
        to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
        }

        60% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0px, 0);
            transform: translate3d(0, 0px, 0);
        }

        75% {
            -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
        }

        90% {
            -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
        }

        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }


</style>

<style lang="scss">
    .navItem-2-container{
        .swiper-pagination {
            right: 10px;
            top: 20px;
            left: auto;
            height: 100px;
            width: 200px;
            .swiper-pagination-bullet {
                position: absolute;
                right: 10px;
                display: block;
                overflow: hidden;
                height: 24px;
                width: 24px;
                letter-spacing: 2px;
                padding: 0 0px 0 24px;
                line-height: 22px;
                transition: width 0.5s;
                border-radius: 12px;
                text-align: left;
                background-color: transparent;
                border: 1px solid rgb(118,228,255);

                background-repeat: no-repeat;
                background-size: 20px auto;
                background-position: 2px center;
                border-image: none;

                &.bullet0 {
                    top: 10px;
                    background-image: url('./images/navItem2/swkp-icon.png');
                }
                &.bullet1 {
                    top: 40px;
                    background-image: url('./images/navItem2/hdy-icon.png');
                }
                &.bullet2 {
                    top: 70px;
                    background-image: url('./images/navItem2/kpg-icon.png');
                }

                &.swiper-pagination-bullet-active {
                    text-indent: 10px;
                    &.bullet0 {
                        width: 160px;
                    }
                    &.bullet1 {
                        width: 100px;
                    }
                    &.bullet2 {
                        width: 120px;
                    }
                }

            }
        }
    }

</style>