<template>
  <div :id="id"></div>
</template>

<script>
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import 'morris.js/morris'
import Converter from '../util/converter'

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

  props: {
    id: { type: String, required: true }, 
    data: { type: [ String, Array ], required: true },
    colors: { type: [ String, Array ], required: false },
    formatter: { type: Function, required: false },
    resize: { type: [ Boolean, String ], required: false }
  },

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
