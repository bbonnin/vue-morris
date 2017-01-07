<template>
  <div :id="id"></div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import 'morris.js/morris'
import 'morris.js/morris.css'
import Converter from '../util/converter'

export default {
  name: 'bar-chart',

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

  props: {
    id: { type: String, required: true }, 
    data: { type: [ String, Array ], required: true },
    barColors: { type: [ String, Array ], required: false },
    xkey: { type: String, required: false, default: 'key' },
    ykeys: { type: [ String, Array ], required: false, default: [ 'value' ] },
    labels: { type: [ String, Array ], required: false, default: [ 'Value' ] },
    hoverCallback: { type: Function, required: false },
    grid: { type: [ Boolean, String ], required: false, default: true },
    axes: { type: [ Boolean, String ], required: false, default: true },
    hideHover: { type: String, required: false },
    stacked: { type: [ Boolean, String ], required: false },
    resize: { type: [ Boolean, String ], required: false },
    gridTextColor: { type: String, required: false, default: '#888' },
    gridTextSize: { type: [ Number, String ], required: false, default: 12 },
    gridTextFamily: { type: String, required: false, default: 'sans-serif' },
    gridTextWeight: { type: String, required: false, default: 'normal' }
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
