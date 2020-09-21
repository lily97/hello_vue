// 路由
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Login from './pages/login'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'


Vue.use(Router);// vue加载插件的固定语法

export default new Router({
    routes: [
        {
            path: '/', // ---根路由
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [ // ---子路由
                {
                    path: '/index', // 首页
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id', // 产品站
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id', // 商品详情
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/login', // 登录
            name: 'login',
            component: Login,
        },
        {
            path: '/cart', // 购物车
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order', // 订单
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'list', // 订单列表
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm', // 订单确认
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay', // 订单支付
                    name: 'order-Pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay', // 阿里支付
                    name: 'alipay',
                    component: AliPay,
                },
            ]
        }
    ]
});