import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from 'pages/App.vue'

import router from '_router/router'

new Vue({
    el:"#app",
    router,
    render: a => a(App),
});
