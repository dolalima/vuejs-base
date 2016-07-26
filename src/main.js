var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')
var App = require('./app.vue')
var routerMap = require('./router')


Vue.use(VueResource);
Vue.use(VueRouter);


var router = new VueRouter()

routerMap(router)

router.start(App, 'app')
