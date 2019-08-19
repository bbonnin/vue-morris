<template>
  <div :id="id"></div>
</template>

<script>
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'
import ChartProps from './chart-mixins'

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
        this.chart.options.labels = Converter.toObject(this.labels)
        this.chart.options.xkey = this.xkey
        this.chart.options.ykeys = Converter.toObject(this.ykeys)

        if (this['barColors']) {
          this.chart.options['barColors'] = Converter.toObject(this['barColors'])
        }

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
      ymax: this.ymax,
      ymin: this.ymin,
      hideHover: this.hideHover,
      horizontal: Converter.toBoolean(this.horizontal),
      stacked: Converter.toBoolean(this.stacked),
      grid: Converter.toBoolean(this.grid),
      gridTextColor: this.gridTextColor,
      gridTextSize: Converter.toInt(this.gridTextSize),
      gridTextFamily: this.gridTextFamily,
      gridTextWeight: this.gridTextWeight,
      xLabelAngle: this.xLabelAngle,
      lineWidth: this.lineWidth,
      pointSize: this.pointSize
    }

    this.addOptionAsObject('barColors', options)
    this.addOption('xLabelFormat', options)
    this.addOption('yLabelFormat', options)
    this.addOption('hoverCallback', options)

    this.chart = Morris.Bar(options)
  }
}
</script>
