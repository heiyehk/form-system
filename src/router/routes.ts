import Index from '@/views/index.vue';
import { RouteRecordRaw } from 'vue-router';
const dragForm: Array<RouteRecordRaw> = [
  {
    path: '/drag-form',
    component: () => import('@/views/drag-form/main/layout.vue'),
    meta: {
      title: '表单拖拽'
    },
    redirect: '/drag-form/index',
    children: [
      {
        path: '/drag-form/index',
        component: () => import('@/views/drag-form/main/index.vue')
      },
      {
        path: '/drag-form/making/:id',
        component: () => import('@/views/drag-form/making/making.vue')
      }
    ]
  },
  {
    path: '/drag-form/preview/:id',
    component: () => import('@/views/drag-form/preview/index.vue')
  },
  {
    path: '/drag-form/test',
    component: () => import('@/views/drag-form/test.vue')
  }
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index
  },
  ...dragForm,
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  }
];

export default routes;
