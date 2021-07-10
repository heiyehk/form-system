import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

// meta声明
declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
