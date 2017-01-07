import Vue from 'vue'
import { DonutChart, BarChart } from '../src/index'

new Vue({
  el: '#app',

  data: {
    donutData: [
      { label: 'Red', value: 300 },
      { label: 'Blue', value: 50 },
      { label: 'Yellow', value: 100 }
    ],

    barData: [
      { year: 2013, and: 10, ios: 5, win: 2 },
      { year: 2014, and: 10, ios: 15, win: 3 },
      { year: 2015, and: 20, ios: 25, win: 2 },
      { year: 2016, and: 30, ios: 20, win: 1 },
    ]
  },

  components: {
    DonutChart, BarChart
  }

})
