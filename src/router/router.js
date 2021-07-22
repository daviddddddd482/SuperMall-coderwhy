import Vue from 'vue';
import VueRouter from 'vue-router';

// const Home =()=> import() 

//1.安装插件
Vue.use(VueRouter)

//2.创建router

const routes=[
    //这里配置路由的映射关系

]

const router=new VueRouter({
    routes,
    mode:'history'   //history模式
})
 
export default router




