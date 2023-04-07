import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/app-vue",
        name:"appVue"
    },{
        path:"/app-react",
        name:"appReact"
    }
  ];
  //根据路由规则创建路由
const router = createRouter({
  history: createWebHistory(""),
  routes,
});
export default router;