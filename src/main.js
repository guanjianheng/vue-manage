import Vue from 'vue'
import App from './App.vue'
// import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/less/index.less';

import router from '../router';
import store from ''

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(Aside)
// Vue.use(Main)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
