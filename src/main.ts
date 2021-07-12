import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
// import 'default-passive-events';
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'moment/dist/locale/zh-cn';

const app = createApp(App);
app.use(Antd).use(Router).use(Store).mount('#app');
