import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function render(){
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 应用加载之前
// eslint-disable-next-line no-unused-vars
export async function bootstrap(props) {
  console.log('app1 bootstrap', props);
}
// 应用 render 之前触发
// eslint-disable-next-line no-unused-vars
export async function mount(props) {
  console.log('app1 mount', props);
  render();
}
// 应用卸载之后触发
// eslint-disable-next-line no-unused-vars
export async function unmount(props) {
  console.log('app1 unmount', props);
}
