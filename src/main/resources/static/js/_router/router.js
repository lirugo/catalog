import Vue from 'vue'
import VueRouter from 'vue-router'
import SigIn from 'components/SigIn.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: SigIn },
]

export default new VueRouter({
    routes
})