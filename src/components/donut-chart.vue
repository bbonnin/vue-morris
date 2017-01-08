<template>
  <div :id="id"></div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'
import ChartProps from './chart-props'

export default {
  name: 'donut-chart',

  data () {
    return {
      chart: null
    }
  },

  watch: {
    data (val) {
      this.$nextTick(() => {
        this.chart.setData(Converter.toObject(this.data))
      })
    }
  },

  mixins: [ ChartProps.donut ],

  mounted () {
    let options = {
      element: this.id,
      data: Converter.toObject(this.data),
      resize: Converter.toBoolean(this.resize)
    }

    if (this.colors) {
      options.colors = Converter.toObject(this.colors)
    }

    if (this.formatter) {
      options.formatter = this.formatter
    }

    this.chart = Morris.Donut(options)
  }
}
</script>
