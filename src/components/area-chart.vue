<template>
  <div :id="id"></div>
</template>

<script>
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'
import ChartProps from './chart-mixins'

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
        this.chart.options.labels = Converter.toObject(this.labels)
        this.chart.options.xkey = this.xkey
        this.chart.options.ykeys = Converter.toObject(this.ykeys)

        if (this['lineColors']) {
          this.chart.options['lineColors'] = Converter.toObject(this['lineColors'])
        }
        
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
      gridTextWeight: this.gridTextWeight,
      lineWidth: this.lineWidth,
      pointSize: this.pointSize,
      ymax: this.ymax,
      ymin: this.ymin,
      smooth: Converter.toBoolean(this.smooth),
      hideHover: this.hideHover,
      parseTime: Converter.toBoolean(this.parseTime),
      postUnits: this.postUnits,
      preUnits: this.preUnits,
      xLabelAngle: this.xLabelAngle,
      goalStrokeWidth: this.goalStrokeWidth,
      eventStrokeWidth: this.eventStrokeWidth,
      fillOpacity: this.fillOpacity,
      behaveLikeLine: this.behaveLikeLine
    }

    this.addOptionAsObject('lineColors', options)
    this.addOption('xLabels', options)
    this.addOptionAsObject('pointFillColors', options)
    this.addOptionAsObject('pointStrokeColors', options)
    this.addOption('dateFormat', options)
    this.addOption('xLabelFormat', options)
    this.addOption('yLabelFormat', options)
    this.addOptionAsObject('goals', options)
    this.addOptionAsObject('goalLineColors', options)
    this.addOptionAsObject('events', options)
    this.addOptionAsObject('eventLineColors', options)
    this.addOption('hoverCallback', options)

    this.chart = Morris.Area(options)
  }
}
</script>
