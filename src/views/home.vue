<script setup lang='ts'>
import { ref } from 'vue'

</script>
 
<template>
  <!-- 轮播图 ## -->
  <div class="banner">
    <a-carousel :style="{ width: '100%', height: '340px', }" :auto-play="true" indicator-type="never"
      show-arrow="hover">
      <a-carousel-item v-for=" in 4">
        <div class="myimg">111</div>
      </a-carousel-item>
    </a-carousel>
  </div>
  <!-- 轮播图 @@ -->
  <!-- 搜索框 ## -->
  <div class="search">
    <a-space direction="vertical" size="large">
      <a-input-search :style="{ width: '600px' }" size="large" placeholder="落花人独立，微雨燕双飞" />
    </a-space>
  </div>
  <!-- 搜索框 @@ -->

  <!-- 关于网站 ## -->
  <div class="aboutUS">
    <div class="title">关于九州词诗词网站</div>
    <div class="describe">
      <p>本网站立足于推动诗词优秀文化传播。专门设计的供诗词爱好者讨论的平台，设计简洁、清晰大气、无广告。</p>
      <p>古诗是中华民族乃至全世界的瑰宝，我们应当传承下去！列位可以在这里吟诗作对，激扬文字，希望各位能够喜欢！</p>
      <p>网站收录了58w首古诗词和3.88w位作者。</p>
      <p>非常感谢开源数据库的提供：<em>https://pan.baidu.com/s/1S5flvzPmrIQTkm_SCbhTdw?pwd=v32l</em>，没有它也不会有这个想法。</p>
    </div>
  </div>
  <!-- 关于网站 @@ -->

  <!-- 诗词分类 ## -->
  <div class="category">
    <div class="title">
      诗词分类
    </div>
    <div class="item">
      <span>唐诗</span>
      <span>宋诗</span>
      <span>四书五经</span>
      <span>五代</span>
      <span>论语</span>
      <span>宋词</span>
      <span>诗经</span>
      <span>蒙学</span>
      <span>纳兰性德</span>
      <span>幽梦影</span>
    </div>
  </div>
  <!-- 诗词分类 @@ -->

  <!-- 诗人推荐 ## -->
  <div class="poetRecommend">
    <div class="leftImg"></div>
    <div class="rightTxt">
      <div class="title">诗人推荐</div>
      <a-divider />
      <div class="poet" v-for="(item, index) in 5" :key="index">
        <span>· 李白</span>
        <span>唐</span>
        <span>(701~762)</span>
        <span class="arrow">
          >
        </span>
        <a-divider />
      </div>
    </div>
  </div>
  <!-- 诗人推荐 @@ -->

  <!--  暂命名 我的设计 @@ -->
  <div class="design">
    <span>我的设计</span>
    <em>\</em>
    <span>我的设计</span>
    <em>\</em>
    <span>我的设计</span>
    <em>\</em>
    <span>我的设计</span>
    <em>\</em>
    <span>我的设计</span>
    <em>\</em>
    <span>我的设计</span>
  </div>
  <!--  暂命名 我的设计 ##-->

  <!-- 诗集推荐 @@ -->
  <div class="discover">
    <div class="title">
      <p>诗集推荐</p>
      <span>发现新思想</span>
    </div>
    <div class="displayArea">
      <div class="item" v-for="(item, index) in 4" :key="index">
        <div class="img"></div>
        <div class="info">
          <span>作者</span>
          <p>诗集标题</p>
          <span>查看详情</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 诗集推荐 ## -->

</template>
 
<style scoped lang='scss'>
// < !-- 轮播图 ## -->
.banner {
  .myimg {
    @include flex-layout();
    width: 100%;
    height: 100%;
    background-color: rgb(45, 205, 173);
  }
}

// < !-- 搜索框 ## -->
.search {
  @include flex-layout();
  @include wrapper();
  height: 60px;
  background-color: antiquewhite;
}

// < !-- 关于网站 ## -->
.aboutUS {
  @include flex-layout(row, left, space-between);
  @include wrapper();
  padding: 10px 0;

  .title {
    @include font-set($font-size-lg, black, 600)
  }

  .describe {
    width: 700px;
    @include font-set(16px, black);

    p {
      line-height: 20px;
    }
  }
}

// < !-- 诗词分类 ## -->
.category {
  @include wrapper();
  margin-top: 20px;

  .title {
    @include font-set($font-size-lg, black, 600);
    margin-bottom: 20px;
  }

  .item {
    @include wrapper();
    @include flex-layout(row, center, space-between, wrap);

    span {
      margin: 15px 0;
      @include flex-layout();
      @include font-set($font-size-base, white, 400);
      list-style-type: none;
      width: 222px;
      height: 127px;
      background-color: rgb(112, 110, 110);
      transition: all 0.1 ease;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 6px 12px rgba(42, 43, 43, 0.8);
        transform: scale(1.01);
      }
    }
  }

}

// 诗人推荐
.poetRecommend {
  @include wrapper();
  @include flex-layout(row, center, space-between);
  margin-top: 40px;

  .leftImg {
    width: 300px;
    height: 240px;
    margin-top: -10px;
    background-color: aquamarine;
  }

  .rightTxt {
    width: 900px;
    margin-top: 15px;

    .title {
      @include font-set($font-size-md, black);
      line-height: 10px;
    }

    .poet {
      @include font-set($font-size-base, black);
      @include flex-layout(row, center, space-between);
      line-height: 0;

      .arrow {
        padding-right: 20px;
      }
    }
  }
}

// <!--  暂命名 我的设计 ##-->
.design {
  padding: 30px 0;
  @include wrapper();
  @include flex-layout(row, center, center);

  span {
    @include font-set($font-size-md, black);
    width: 30px;
    height: 120px;
    writing-mode: tb-rl;
    padding: 40px
  }

  em {
    @include font-set(30px, #bcbaba);
    transform: rotate(60deg);
    margin-top: -30px;
  }
}

// < !-- 诗集推荐 @@ -->
.discover {
  @include wrapper();
  @include flex-layout();
  margin-bottom: 50px;

  .title {
    @include flex-layout();

    p {
      @include font-set($font-size-lg, black, 600);
      line-height: 10px;
    }

    span {
      @include font-set($font-size-sm, black);
      line-height: 40px;
    }
  }

  .displayArea {
    @include flex-layout(row, center, space-between);
    width: 100%;

    .item {
      width: 241px;
      padding: 10px;

      // 上方图片
      .img {
        width: 100%;
        height: 200px;
        background-color: #716e6e;
      }

      // 下方文字
      .info {
        height: 127px;
        width: 100%;
        background-color: rgb(201, 205, 205);
        @include flex-layout(column, center, center);

        span {
          @include font-set($font-size-sm, black, 600);
        }

        p {
          @include font-set($font-size-md, black, 600);
          line-height: 10px;
        }
      }
    }
  }
}
</style>