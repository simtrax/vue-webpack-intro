
window.Vue = require('vue')
require('vue-resource')

Vue.component('app', require('../components/app.vue'));
Vue.component('child-component', require('../components/child-component.vue'));

new Vue({
    el: 'body'
});