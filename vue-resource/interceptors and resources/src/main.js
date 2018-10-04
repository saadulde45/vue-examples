import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = "https://vue-training-6eb06.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
  console.log("intercepted");
  if(request.method === "POST") {
    request.method = "PUT";
  }
  // next();
  next(response => {
    response.json = () => {
      return {
        wrapper: response.body
      };
    }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
