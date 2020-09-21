<template>
  <div class="order">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="header-name">
        <span class="name-1">
          {{title}}
          <slot name="tip"></slot>
        </span>
      </div>
      <div class="user-name">
        <!-- <slot name="tip"></slot> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  props: {
    title: String,
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.order {
  height: 112px;
  background: #ffffff;
  border-bottom: 2px solid #ff6600;
  .container {
    @include flex();
    height: 112px;
    position: relative;
    .header-logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: $colorA;
      a {
        display: inline-block;
        width: 110px;
        height: 55px;
        &:before {
          content: " ";
          @include bgImg(55px, 55px, "/images/mi-logo.png", 55px);
          transition: margin 0.2s;
        }
        &:after {
          content: " ";
          @include bgImg(55px, 55px, "/images/mi-home.png", 55px);
        }
        &:hover:before {
          margin-left: -55px;
          transition: margin 0.2s;
        }
      }
    }
    .header-name {
      width: 800px;
      padding-right: 260px;
      .name-1 {
        font-size: 28px;
        font-weight: bold;
        color: #333333;
        line-height: 60px;
        span {
          font-size: 14px;
          color: #999999;
          padding-left: 15px;
        }
      }
      .name-2 {
        padding-left: 15px;
      }
    }
    .user-name {
      font-size: 16px;
      font-weight: bold;
      color: #666666;
      line-height: 60px;
    }
  }
}
</style>