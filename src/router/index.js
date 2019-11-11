import Vue from 'vue'
//1.引入路由

import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入组件
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/login'

 //配置路由
const routes=[
  {path:'/msite',component:MSite,meta:{showFooter:true}},
  {path:'/order',component:Order,meta:{showFooter:true}},
  {path:'/profile',component:Profile,meta:{showFooter:true}},
  {path:'/search',component:Search,meta:{showFooter:true}},
  {path:'/login',component:Login},
  //默认路径
  {path:'/',component:MSite},
  
]
//3.实例化路由
const router=new VueRouter({
  routes
})
export default router;
