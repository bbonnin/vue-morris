
import Raphael from 'raphael/raphael'
global.Raphael = Raphael

import Vue from 'vue'
import { DonutChart, BarChart, LineChart, AreaChart } from '../dist/vue-morris.min.js'

new Vue({
  el: '#app',

  data: {
    donutData: [
      { label: 'Red', value: 300 },
      { label: 'Blue', value: 50 },
      { label: 'Yellow', value: 100 }
    ],

    barData: [
      { year: '2013', and: 10, ios: 5, win: 2 },
      { year: '2014', and: 10, ios: 15, win: 3 },
      { year: '2015', and: 20, ios: 25, win: 2 },
      { year: '2016', and: 30, ios: 20, win: 1 },
    ],

    lineData: [
      { year: '2013', a: 10, b: 5 },
      { year: '2014', a: 40, b: 15 },
      { year: '2015', a: 20, b: 25 },
      { year: '2016', a: 30, b: 20 },
    ],

    areaData: [
      { year: '2013', a: 30, b: 5 },
      { year: '2014', a: 25, b: 15 },
      { year: '2015', a: 29, b: 25 },
      { year: '2016', a: 50, b: 20 },
    ]
  },

  components: {
    DonutChart, BarChart, LineChart, AreaChart
  },

  mounted () {
    setInterval(() => {
      this.lineData = [
        { year: '2013', a: this.rand(100), b: this.rand(100) },
        { year: '2014', a: this.rand(100), b: this.rand(100) },
        { year: '2015', a: this.rand(100), b: this.rand(100) },
        { year: '2016', a: this.rand(100), b: this.rand(100) },
      ]
    }, 5000)
  },

  methods: {
    rand (limit) {
      return Math.round(Math.random() * limit)
    },

    onLineHover (index, options, content, row) {
      console.log('onLineHover: ', index, options, content, row)
      return content
    }
  }

})
