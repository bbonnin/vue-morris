<template>
  <div :id="id"></div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import 'morris.js/morris'

export default {
  name: 'donut',

  data () {
    return {
      chart: null
    }
  },

  computed: {
    chartData () {
      if (typeof this.data === 'string') {
        return JSON.parse(this.data)
      }
      return this.data
    },

    chartResize () {
      if (typeof this.resize === 'string') {
        return this.resize === 'true'
      }
      return false
    }
  },

  watch: {
    data (val) {
      this.$nextTick(() => {
        this.chart.setData(this.data)
      })
    }
  },

  props: {
    id: { type: String, required: true }, 
    data: { required: true },
    colors: { required: false },
    formatter: { type: Function, required: false },
    resize: { required: false }
  },

  mounted () {
    let options = {
      element: this.id,
      data: this.chartData,
      resize: this.chartResize
    }

    if (this.colors) {
      options.colors = this.colors
    }

    if (this.formatter) {
      options.formatter = this.formatter
    }

    this.chart = Morris.Donut(options)
  }
}
</script>
