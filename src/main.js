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
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

/* [EXAMPLE 3] Using conditionals directives */
new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

/* [EXAMPLE 4] Using loop directives */
new Vue({
  el: '#app-4',
  data: {
    todos: [
      'Learn javascript',
      'Learn Vue',
      'Build something awesome'
    ]
  }
})

/* [EXAMPLE 5] Using on directive */
new Vue({
  el: '#app-5',
  data: {
    message: 'Able'
  },
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

/* [EXAMPLE 6] Using on events */
new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Able'
  }
})

/* [EXAMPLE 7] Components */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
