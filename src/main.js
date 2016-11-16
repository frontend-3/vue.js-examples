import Vue from 'vue'
/* eslint-disable no-new */

/* NOTE: Just comment and uncomment if you want to run any specific example */

/* [EXAMPLE 1] Declarative render */
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

/* [EXAMPLE 2] Using directives */
new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

/* [EXAMPLE 3] Using conditionals directives */
new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

/* [EXAMPLE 4] Using loop directives */
new Vue({
  el: '#app4',
  data: {
    todos: [
      'Learn javascript',
      'Learn Vue',
      'Build something awesome'
    ]
  }
})

/* [EXAMPLE] Components */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
