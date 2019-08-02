import Vue from 'vue'
import App from './App'
import VueI18n from './common/js/vue-i18n.min' 

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({  
  locale: 'zh',  
  messages: {  
    'en': require('./common/lang/en'), 
    'zh': require('./common/lang/zh')
  }  
}) 

Vue.prototype._i18n = i18n 
App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})

app.$mount()
