import Vue from 'vue'
import { Donut } from '../src/index'

new Vue({
  el: '#app',

  data: {
    someData: [
      { label: 'Red', value: 300, color: '#FF6384' },
      { label: 'Blue', value: 50, color: '#36A2EB' },
      { label: 'Yellow', value: 100, color: '#FFCE56' }
    ]
  },

  components: {
    Donut
  }

})
