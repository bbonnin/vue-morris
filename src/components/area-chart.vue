<template>
  <div :id="id"></div>
</template>

<script>
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'
import ChartProps from './chart-props'

export default {
  name: 'area-chart',

  mixins: [ ChartProps.area ],

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

    this.chart = Morris.Area(options)
  }
}
</script>
