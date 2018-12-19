import PagePostCreate from './pages/posts.create'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('quill', require('./components/quill.vue'));

Vue.component('com-album', require('./components/album.vue'));
Vue.component('com-photo', require('./components/photo.vue'));
Vue.component('com-table-row-post', require('./components/table-row-post.vue'));
Vue.component('com-table-row-role', require('./components/table-row-role.vue'));
Vue.component('com-table-row-user', require('./components/table-row-user.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app'
});

window.vm = app

document.addEventListener('DOMContentLoaded', function() {

  PagePostCreate.loaded()
})
