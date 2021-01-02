import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = 'bg'
  }

  i18n.locale = language;
  next();
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
