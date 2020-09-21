// 存放关于订单的页面!!
<template>
  <div>
    <order-header title="我的购物车">
      <template v-solt:tip>
        <a href="http://www.baidu.com" class="name-2" target="_blank">请谨防钓鱼链接或诈骗电话，了解更多></a>
      </template>
    </order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";

export default {
  name: "order",
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>