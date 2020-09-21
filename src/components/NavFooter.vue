<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="images/logo-footer.png" alt />
      <p>小米商城</p>
    </div>

    <div class="footer-link">
      <a href>河畔一角主页</a>
      <span>|</span>
      <a href>Vue全栈课程</a>
      <span>|</span>
      <a href>React全家桶课程</a>
      <span>|</span>
      <a href>微信支付专项课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">mi.51purse.com</span> All Right Reserved</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";

.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: $colorD;
    }
    span{
        margin:0 10px;
    }
  }
  .copyright {
    margin-bottom: 2px;
    .domain{
        color: $colorA;
    }
  }
}
</style>