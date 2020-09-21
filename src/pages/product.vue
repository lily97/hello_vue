<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="pro-img">
      <div class="mi8">
        <div class="mi8-1">小米</div>
        <div class="mi8-2">8</div>
      </div>
      <div class="years-8">8 周 年 旗 舰 版</div>
      <div class="info">全球首款双频 GPS | 骁龙845 | AI 变焦双摄 | 红外人脸识别</div>
      <div class="price">￥2599</div>
    </div>
    <div class="detail-img"></div>
    <div class="info-img"></div>

    <div class="swiper-box">
      <swiper v-bind:options="swiperOptions">
        <swiper-slide v-for="(sub,i) in slideList" v-bind:key="i">
          <div class="three-img">
            <a v-bind:href="'/#/product'+sub[0].id">
              <img v-bind:src="sub[0].img" alt />
            </a>
            <a v-bind:href="'/#/product'+sub[1].id">
              <img v-bind:src="sub[1].img" alt />
            </a>
            <a v-bind:href="'/#/product'+sub[2].id">
              <img v-bind:src="sub[2].img" alt />
            </a>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="AI">小米8 AI变焦双摄拍摄</div>
    </div>
    <div class="video-bg">
      <div class="video-info">
        <div class="info-1">
          <span>60帧超慢动作摄影</span>
          <span>慢慢回味每一瞬间的精彩</span>
        </div>
        <div class="info-2">
          <span>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</span>
          <span>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</span>
        </div>
      </div>
      <div class="video">
        <video-player
          class="video-player vjs-custom-skin video-play"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "product",
  components: {
    ProductParam,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: "cube",
        // 切换效果
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        // 可点击小圆点切换
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 左右箭头切换
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        [
          {
            id: "42",
            img: "/images/product/gallery-6.jpg",
          },
          {
            id: "45",
            img: "/images/product/gallery-2.png",
          },
          {
            id: "46",
            img: "/images/product/gallery-3.png",
          },
        ],
        [
          {
            id: "42",
            img: "/images/product/gallery-4.png",
          },
          {
            id: "42",
            img: "/images/product/gallery-5.jpg",
          },
          {
            id: "46",
            img: "/images/product/gallery-3.png",
          },
        ],
        [
          {
            id: "42",
            img: "/images/product/gallery-2.png",
          },
          {
            id: "42",
            img: "/images/product/gallery-3.png",
          },
          {
            id: "46",
            img: "/images/product/gallery-4.png",
          },
        ],
      ],

      // 视频播放
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "/images/product/video.mp4", //url地址
          },
        ],
        poster: "/images/product/gallery-1.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";

// .container{
// .product{

// }
// }
.product {
  .btn {
    margin-left: 11px;
  }
  .pro-img {
    @include bgImg(100%, 570px, "/images/product/product-bg-1.png");
    color: #333333;
    text-align: center;
    .mi8 {
      margin-top: 55px;
      font-weight: bold;
      .mi8-1 {
        height: 75px;
        line-height: 75px;
        font-size: 80px;
        display: inline-block;
      }
      .mi8-2 {
        height: 75px;
        line-height: 75px;
        display: inline-block;
        margin-left: 8px;
        font-size: 80px;
      }
    }
    .years-8 {
      height: 23px;
      line-height: 23px;
      text-align: center;
      font-size: 24px;
      margin-top: 15px;
    }
    .info {
      font-size: 16px;
      margin-top: 15px;
    }
    .price {
      font-size: 38px;
      margin-top: 15px;
    }
  }
  .detail-img {
    @include bgImg(100%, 397px, "/images/product/product-bg-2.png");
    margin-top: 38px;
  }
  .info-img {
    @include bgImg(100%, 504px, "/images/product/product-bg-3.png");

    margin-top: 45px;
  }
  .swiper-box {
    margin-top: 20px;
    .three-img {
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        width: 500px;
        height: auto;
      }
    }
    .AI {
      text-align: center;
      font-size: 18px;
      line-height: 42px;
      margin-top: 10px;
      color: #333333;
      font-weight: bold;
    }
  }
  .video-bg {
    height: 1044px;
    background: #070708;
    .video-info {
      text-align: center;
      padding: 70px;
      span {
        word-break: normal;
        width: auto;
        display: block;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow: hidden;
        color: #ffffff;
      }
      .info-1 {
        font-weight: bold;
        line-height: 80px;
        font-size: 60px;
      }
      .info-2 {
        line-height: 36px;
        font-size: 18px;
        padding: 25px;
      }
    }
    .video {
      width: 100%;
      height: 660px;
      margin-top: -50px;
      // @include bgImg(100%, 540px, "/images/product/gallery-1.png");
      .video-play {
        width: 1100px;
        height: 500px;
        padding: 0px 210px;
      }
    }
  }
}
</style>

 