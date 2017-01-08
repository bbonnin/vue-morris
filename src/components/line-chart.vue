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
  name: 'line-chart',

  mixins: [ ChartProps.line ],

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

  mounted () {
    let options = {
      element: this.id,
      data: Converter.toObject(this.data),
      resize: Converter.toBoolean(this.resize),
      labels: Converter.toObject(this.labels),
      xkey: this.xkey,
      ykeys: Converter.toObject(this.ykeys),
      grid: Converter.toBoolean(this.grid),
      gridTextColor: this.gridTextColor,
      gridTextSize: Converter.toInt(this.gridTextSize),
      gridTextFamily: this.gridTextFamily,
      gridTextWeight: this.gridTextWeight
    }

    if (this.lineColors) {
      options.lineColors = Converter.toObject(this.lineColors)
    }

    if (this.xLabels) {
      options.xLabels = this.xLabels
    }

    console.log(options.data)

    this.chart = Morris.Line(options)
  }
}
</script>
