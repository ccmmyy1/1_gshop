/**l路由器对象 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引用使用路由的vue
import MSite from '../src/pages/MSite/MSite'
import Order from '../src/pages/Order/Order'
import Profile from '../src/pages/Profile/Profile'
import Search from '../src/pages/Search/Search'
//声明使用router
Vue.use(VueRouter)
//使用所有路由
export default new VueRouter({
    routes:[
        {
            path:'/msite',
           component:MSite
    },
    {
        path:'/order',
       component:Order
},
{
    path:'/profile',
   component:Profile
},
{
    path:'/search',
   component:Search
},
/**默认路由设置 */
{
    path:'/',
   component:MSite
},
    ]
})