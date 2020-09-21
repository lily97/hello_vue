<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">小米8</div>
      <div class="pro-param">
        <a href>概述</a>
        <span>|</span>
        <a href>参数</a>
        <span>|</span>
        <a href>用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHight);
  },
  methods: {
    initHight() {
      let scroll =
        document.documentElement.scrollTop ||
        window.pageXOffset ||
        document.body.scrollTop;
      this.isFixed = scroll > 150 ? true : false;
    },
    destroyed() {
      window.removeEventListener("scroll", this.initHight, false);
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: $colorG;
  z-index: 20;
 
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
     box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex();

    .pro-title {
      color: #333333;
      font-size: 18px;
    }
    .pro-param {
      a {
        width: 28px;
        height: 14px;
        font-size: 14px;
        color: #666666;
        line-height: 60px;
        text-align: center;
      }
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>