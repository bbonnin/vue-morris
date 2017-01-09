<template>
  <div :id="id"></div>
</template>

<script>
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'
import ChartProps from './chart-props'

export default {
  name: 'bar-chart',

  mixins: [ ChartProps.bar ],

  data () {
    return {
      chart: null
    }
  },

  watch: {
    data (val) {
      this.$nextTick(() => {
        this.chart.setData(this.data)
      })
    }
  },

  mounted () {
    let options = {
      element: this.id,
      data: Converter.toObject(this.data),
      labels: Converter.toObject(this.labels),
      resize: Converter.toBoolean(this.resize),
      xkey: this.xkey,
      ykeys: Converter.toObject(this.ykeys),
      axes: Converter.toBoolean(this.axes),
      hideHover: this.hideHover,
      stacked: Converter.toBoolean(this.stacked),
      grid: Converter.toBoolean(this.grid),
      gridTextColor: this.gridTextColor,
      gridTextSize: Converter.toInt(this.gridTextSize),
      gridTextFamily: this.gridTextFamily,
      gridTextWeight: this.gridTextWeight
    }

    if (this.barColors) {
      options.barColors = Converter.toObject(this.barColors)
    }

    if (this.hoverCallback) {
      options.hoverCallback = this.hoverCallback
    }

    this.chart = Morris.Bar(options)
  }
}
</script>
