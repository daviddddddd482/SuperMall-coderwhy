import Vue from "vue";
import VueRouter from "vue-router";

// const Home =()=> import()

//1.安装插件
Vue.use(VueRouter);

//2.创建router
const Home = () => import("../views/home/Home.vue");
const Category = () => import('../views/category/Category.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/Profile.vue')

const routes = [
  //这里配置路由的映射关系
  { 
    path:'',
    redirect:"/home"
  },
  { 
    path:'/',
    redirect:"/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
];

const router = new VueRouter({
  routes,
  // 使用historymos,路径与域名中间没有#号 
  mode:'history'
  
  // mode: "history" //history模式
});

export default router;
