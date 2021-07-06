import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    hidden: true,
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '主页'
        // icon: 'dashboard'
      }
    }]
  },

  {
    path: '/database',
    component: Layout,
    redirect: '/database/food_category',
    name: '基础库维护',
    meta: {
      title: '基础库维护',
      icon: 'dashboard'
    },
    children: [{
        path: 'food_category',
        name: '食品分类维护',
        component: () => import('@/views/database/food_category/index'),
        meta: {
          title: '食品分类维护',
          icon: 'circle'
        }
      },
      {
        path: 'test_factor',
        name: '检测因子维护',
        component: () => import('@/views/database/test_factor/index'),
        meta: {
          title: '检测因子维护',
          icon: 'circle'
        }
      },
      /*
      {
        path: 'determination_standard',
        name: '判定标准维护',
        component: () => import('@/views/database/determination_standard/index'),
        meta: {
          title: '判定标准维护',
          icon: 'circle'
        }
      },*/
      {
        path: 'test_standard',
        name: '检测标准维护',
        component: () => import('@/views/database/test_standard/index'),
        meta: {
          title: '检测标准维护',
          icon: 'circle'
        }
      },
      {
        path: 'category_factor_relation',
        name: '分类与因子关系维护',
        component: () => import('@/views/database/category_factor_relation/index'),
        meta: {
          title: '分类与因子关系维护',
          icon: 'circle'
        }
      },
      {
        path: 'api_example',
        name: 'API示例',
        component: () => import('@/views/database/api_example/index'),
        meta: {
          title: 'API示例',
          icon: 'circle'
        }
      },
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
