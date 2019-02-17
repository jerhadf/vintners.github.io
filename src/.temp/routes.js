import NotFound from "c:\\Users\\Guest User\\Desktop\\Coding\\projects\\vintners.github.io\\node_modules\\gridsome\\app\\pages\\404.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue")
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  }
]

export { NotFound }

