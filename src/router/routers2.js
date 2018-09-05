import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: 'My Dashboard'
    },
    children: [
      {
        path: 'my_dashboard',
        name: 'my_dashboard',
        meta: {
          icon: '',
          title: 'My Dashboard'
        },
        component: () => import('@/view/workbench/content-header.vue')
      },
      {
        path: 'viewlists',
        name: 'ViewLists',
        meta: {
          icon: '',
          title: 'View Lists'
        },
        component: () => import('@/view/join-page.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        meta: {
          icon: '',
          title: 'Settings'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'Wrike',
    meta: {
      icon: 'logo-buffer',
      title: 'Wrike'
    },
    redirect:'https://www.baidu.com/'
  },
  {
    path: '/work_bench',
    name: 'work_bench',
    meta: {
      icon: 'md-cloud-upload',
      title: 'Work Bench'
    },
    component: Main,
    children: [
      {
        path: 'my_work_items',
        name: 'myworks',
        meta: {
          icon: 'ios-document',
          title: '我的工作项'
        },
        component: () => import('@/view/workbench/my_work_items.vue')
      },
      {
        path: 'update_paste_page',
        name: 'projects',
        meta: {
          icon: 'md-clipboard',
          title: '项目列表'
        },
        component: () => import('@/view/update/update-paste.vue')
      },
    ]
  },
  {
    path: '/excel',
    name: 'apm',
    meta: {
      icon: 'ios-stats',
      title: 'APM'
    },
    component: Main,
    children: [
      {
        path: 'upload-excel',
        name: 'upload-excel',
        meta: {
          icon: 'md-add',
          title: '导入EXCEL'
        },
        component: () => import('@/view/excel/upload-excel.vue')
      },
      {
        path: 'export-excel',
        name: 'export-excel',
        meta: {
          icon: 'md-download',
          title: '导出EXCEL'
        },
        component: () => import('@/view/excel/export-excel.vue')
      }
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: '动态路由',
          notCache: true
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: '带参路由',
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
