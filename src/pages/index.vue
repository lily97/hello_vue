// 该页面嵌套在router-view里面去
<template>
  <div class="index">
    <div class="container">
      <div class="nav-menu">
        <ul class="menu-wrap">
          <li class="menu-item">
            <a href="javascript:;">手机 电话卡</a>
            <div class="children">
              <ul v-for="(item,i) in menuList" v-bind:key="i">
                <li v-for="(sub,j) in item" v-bind:key="j">
                  <a v-bind:href="sub!=1?'/#/product/'+sub.id:''">
                    <img v-lazy="sub!=1?sub.img:'/images/item-box-1.png' " alt />
                    {{sub!=1?sub.name : '小米9'}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电视 盒子</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">笔记本 平板</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">家电 插线板</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">出行 穿戴</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">耳机 音箱</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电源 配件</a>
          </li>
          <li class="menu-item">
            <a href="javascript:;">生活 箱包</a>
          </li>
        </ul>
      </div>
      <div class="swiper-box">
        <swiper v-bind:options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.index">
            <a v-bind:href="'/#/product'+item.id">
              <img v-bind:src="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/images/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/images/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,i) in phoneList" :key="i">
              <div class="item" v-for="(sub,j) in item" :key="j">
                <span
                  v-bind:class="(sub.id%2==0) ?'new-pro':'kill-pro'"
                >{{(sub.id%2==0) ?'新品':'秒杀'}}</span>
                <div class="item-img">
                  <img
                    v-bind:src="!sub.mainImage?'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg':sub.mainImage"
                    v-bind:alt="sub.subtitle"
                  />
                </div>
                <div class="item-info">
                  <h3>{{sub.name}}</h3>
                  <p>{{sub.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{sub.price|currency}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <model
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modelType="middle"
      v-bind:showModel="showModel"
      v-on:submit="goToCart"
      v-on:cancel="showModel=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </model>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Model from "./../components/Model";

import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Model,
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
        {
          id: "42",
          img: "/images/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/images/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/images/slider/slide-3.jpg",
        },
        {
          id: "42",
          img: "/images/slider/slide-4.jpg",
        },
        {
          id: "42",
          img: "/images/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/images/item-box-1.png",
            name: "小米1",
          },
          {
            id: 31,
            img: "/images/item-box-2.png",
            name: "小米2",
          },
          {
            id: 32,
            img: "/images/item-box-3.jpg",
            name: "小米3",
          },
          {
            id: 33,
            img: "/images/item-box-4.jpg",
            name: "小米4",
          },
        ],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      adsList: [
        { id: 33, img: "/images/ads/ads-1.png" },
        { id: 48, img: "/images/ads/ads-2.jpg" },
        { id: 45, img: "/images/ads/ads-3.png" },
        { id: 47, img: "/images/ads/ads-4.jpg" },
      ],
      phoneList: [],
      showModel: false,
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    //初始化
    // this.getProductList();
    this.searchUser();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012", //要查的商品类别id
            pageSize: 14, //分页
          },
        })
        .then((res) => {
          this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)];
        });
    },

    searchUser() {
      this.axios
        .post("user/selectUser", {
          params: {
            loginName: "xiaoming123",
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },

    addCart() {
      this.showModel = true;
      // this.axios
      //   .get("/carts", {
      //     productid: id,
      //     selected: true,
      //   })
      //   .then(() => {})
      //   .carch(() => {
      //     this.showModel = true;
      //   });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss" >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";

.index {
  .nav-menu {
    position: absolute;
    width: 264px;
    height: 451px;
    z-index: 9;
    padding: 26px 0;
    background-color: #56575a7a;
    box-sizing: border-box;
    .menu-wrap {
      .menu-item {
        height: 50px;
        line-height: 50px;
        &:hover {
          background-color: $colorA;
          .children {
            display: block;
          }
        }
        a {
          position: relative;
          display: block;
          font-size: 16px;
          color: #ffffff;
          padding-left: 30px;
          &:after {
            position: absolute;
            right: 30px;
            top: 17.5px;
            content: " ";
            @include bgImg(10px, 15px, "/images/icon-arrow.png");
          }
        }

        .children {
          display: none;
          width: 962px;
          height: 451px;
          background-color: $colorG;
          position: absolute;
          top: 0;
          left: 264px;
          border: 1px solid $colorH;
          ul {
            display: flex;
            justify-content: space-between;
            height: 75px;
            li {
              height: 75px;
              line-height: 75px;
              flex: 1;
              padding-left: 23px;
            }
            a {
              color: $colorB;
              font-size: 14px;
            }
            img {
              width: 42px;
              height: 35px;
              vertical-align: middle;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }

  .swiper-container {
    height: 451px;
    .swiper-button-prev {
      left: 274px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .ads-box {
    margin-top: 14px;
    margin-bottom: 31px;
    display: flex;
    justify-content: space-between;
    a {
      display: inline-block;
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px 0;
    h2 {
      font-size: $fontF;
      width: 45px;
      height: 21px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper {
      display: flex;
      margin-top: 20px;
      // justify-content: space-between;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              color: $colorG;
              font-size: 14px;
              line-height: 24px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                font-weight: bold;
                line-height: 13px;
              }
              p {
                line-height: 13px;
                color: $colorD;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: " ";
                  @include bgImg(22px, 22px, "/images/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>