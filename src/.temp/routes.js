import NotFound from "~/pages/404.vue"

export const routes = [
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue")
  },
  {
    path: "/blog/metaphor-of-light",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/routine",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/sample/sample",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/125",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/143",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/204",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/212",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/215",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/227",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/240",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/370",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/drafts/377",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-40",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-gaysavar",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-gypsies-dont-fly",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-my-political-compass",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-synaptic-pruning",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-the-die-is-cast",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-the-incompatibility-of-kantianism-and-christianity",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-the-tooth-breaker",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150124-waiting-for-havana",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150125-on-mocking-religion",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20150125-thoughts-on-of-atheism",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20160208-routine",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20160314-123",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20160623-existentialism-in-javascript",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20160905-ethical-commodities-products-say-person",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20160917-ayn-rand-selfishness-bent-books",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20161024-matters-president-electability-doesnt",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20161117-why-i-love-the-office",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170104-gradual-causes-long-history-fake-news-crisis",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170112-agent-age-problem-consequentialism",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170120-fetishization-individuals-hitler-ken-bone",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170121-kierkegaardian-approach-philosophy-replacing-objective-career-subjective-relationship",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170121-teaching-philosophy-elementary-school-students",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170516-last-lecture",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170516-moving-out",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/wordpress/posts/20170603-running-bad-long-term",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  }
]

export { NotFound }

