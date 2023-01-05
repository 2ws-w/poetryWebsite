<script setup lang='ts'>
import { ref, reactive } from 'vue'
import poetryCard from '../components/poetryCard.vue'
import detailCardVue from '../components/detailCard.vue';
const poetrybrief: any = reactive({
    arr: [
        {
            shiju1: '两岸猿声啼不住',
            shiju2: '轻舟已过万重山',
            name: '李白',
        },
        {
            shiju1: '人生如逆旅',
            shiju2: '我亦是行人',
            name: '苏轼',
        }, {
            shiju1: '孤帆远影碧空尽',
            shiju2: '唯见长江天际流',
            name: '李白',
        }, {
            shiju1: '旧时王谢堂前燕',
            shiju2: '飞入寻常百姓家',
            name: '刘禹锡',
        },
    ]
})//展示诗句


const poetrydetail: any = reactive({
    arr: [
        {
            title: '江城梅花引 · 荆溪阻雪',
            author: '蒋捷',
            dynasty: '唐',
            content: '白鸥问我泊孤舟，是身留，是心留？心若留时，何事锁眉头？风拍小帘灯晕舞，对闲影，冷清清，忆旧游。旧游。旧游。今在否？花外楼，柳下舟。梦也梦也，梦不到，寒水空流。漠漠黄云，湿透木棉裘。都道无人愁似我，今夜雪，有梅花，似我愁。',
        },
        {
            title: '菩萨蛮',
            author: '温庭筠',
            dynasty: '唐',
            content: '玉楼明月长相忆，柳丝袅娜春无力。门外草萋萋，送君闻马嘶。画罗金翡翠，香烛销成泪。花落子规啼，绿窗残梦迷。',
        },
        {
            title: '满江红',
            author: '岳飞',
            dynasty: '宋',
            content: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切！靖康耻，犹未雪。臣子恨，何时灭？驾长车、踏破贺兰山缺！壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙！',
        },
    ]
})//展示诗句

</script>
 
<template>
    <!-- 头部 banner ##  -->
    <div class="topBanner">
        <div class="topPoetry">
            <span class="shiju">两岸猿声啼不住，轻舟已过万重山。</span>
            <span class="zuozhe">李白 · 《早发白帝城》</span>
        </div>
        <div class="search">
            <a-space direction="vertical" size="large">
                <a-input-search :style="{ width: '520px', height: '40px' }" placeholder="会当凌绝顶" />
            </a-space>
        </div>
    </div>
    <!-- 头部 banner @@  -->

    <!-- 面包屑 ## -->
    <div class="crumb">
        <a-breadcrumb>
            <a-breadcrumb-item>
                <a href="/"> <icon-home /> 主页</a>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <a href="/dynastyCategory"> 诗歌分类 </a>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
    <!-- 面包屑 @@ -->
    <!-- 著名诗人 ## -->
    <div class="famous_poet">
        <div class="title">
            著名诗人
        </div>
        <div class="items">
            <div class="item" v-for="(item, index) in 6" :key="index">
                <div class="profile_picture"></div>
                <div class="name">刘禹锡</div>
            </div>
        </div>

    </div>
    <!-- 著名诗人 @@ -->

    <!-- 诗歌 ## -->
    <div class="poetry">
        <div class="title">
            诗歌
        </div>

        <div class="poetryCard">
            <div class="poertyitem" v-for="(item, index) in poetrybrief.arr" :key="index">
                <poetryCard :info="poetrybrief.arr[index]"></poetryCard>
            </div>
        </div>
        <div class="poetryList">
            <div class="poertyitem" v-for="(item, index) in poetrydetail.arr" :key="index">
                <detailCardVue :info="poetrydetail.arr[index]"></detailCardVue>
            </div>
        </div>
    </div>
    <!-- 诗歌 @@ -->
</template>
 
<style scoped lang='scss'>
// 顶部banner
.topBanner {
    height: 300px;
    width: 100%;
    background-color: antiquewhite;
    position: relative;

    .topPoetry {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%, -50%);
        @include flex-layout();

        .shiju {
            @include font-set($font-size-base, rgb(54, 53, 53));
        }

        .zuozhe {
            padding-top: 10px;
            @include font-set($font-size-sm, rgb(151, 147, 147));
        }
    }

    .search {
        position: absolute;
        left: 50%;
        bottom: -40px;
        transform: translate(-50%, -50%)
    }
}

// 面包屑
.crumb {
    padding: 40px 0 20px 0;
    @include wrapper;
}

// 著名诗人
.famous_poet {
    @include wrapper;

    .title {
        @include font-set($font-size-lg, black, 600);
    }

    .items {
        @include flex-layout(row, center, space-between);
        margin-top: 20px;
    }

    .item {
        @include flex-layout();

        .profile_picture {
            height: 121px;
            width: 121px;
            background-color: azure;
            border-radius: 50%;
        }

        .name {
            padding-top: 20px;
            @include font-set($font-size-base, rgb(78, 77, 78))
        }
    }
}

// 诗歌 ##
.poetry {
    padding-top: 40px;
    @include wrapper;

    .title {
        @include font-set($font-size-lg, black, 600);
    }

    .poetryCard {
        margin: 20px 0;
        @include flex-layout(row, center, space-between);
    }

    .poetryList {
        margin: 50px 0;

        .poertyitem {
            margin: 30px;
        }
    }
}
</style>