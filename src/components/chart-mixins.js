import Converter from '../util/converter'

/**
 * All properties used by the charts with their constraints.
 */
const Props = {
  id: { type: String, required: true }, 
  data: { type: [ String, Array ], required: true },
  barColors: { type: [ String, Array, Function ], required: false },
  xkey: { type: String, required: false, default: 'key' },
  ykeys: { type: [ String, Array ], required: false, default: function _default() { return ['value']; }},
  labels: { type: [ String, Array ], required: false, default: function _default() { return ['Value']; }},
  hoverCallback: { type: Function, required: false },
  axes: { type: [ Boolean, String ], required: false, default: true },
  hideHover: { type: String, required: false },
  stacked: { type: [ Boolean, String ], required: false },
  resize: { type: [ Boolean, String ], required: false },
  horizontal: { type: [ Boolean, String ], required: false, default: false },
  grid: { type: [ Boolean, String ], required: false, default: true },
  gridTextColor: { type: String, required: false, default: '#888' },
  gridTextSize: { type: [ Number, String ], required: false, default: 12 },
  gridTextFamily: { type: String, required: false, default: 'sans-serif' },
  gridTextWeight: { type: String, required: false, default: 'normal' },

  colors: { type: [ String, Array ], required: false },
  formatter: { type: Function, required: false },

  lineColors: { type: [ String, Array, Function ], required: false },
  xLabels: { type: String, required: false },
  lineWidth: { type: [ Number, String ], required: false },
  pointSize: { type: [ Number, String ], required: false },
  pointFillColors: { type: [ String, Array ], required: false },
  pointStrokeColors: {  type: [ String, Array ], required: false },
  ymax: { type: String, required: false }, 
  ymin: { type: String, required: false },
  smooth: { type: [ Boolean, String ], required: false, default: true },
  parseTime: { type: [ Boolean, String ], required: false, default: true },
  postUnits: { type: String, required: false },
  preUnits: { type: String, required: false },
  dateFormat: { type: Function, required: false },
  xLabelFormat: { type: Function, required: false },
  yLabelFormat: { type: Function, required: false },
  xLabelAngle: { type: String, required: false },
  goals: { type: [ String, Array ], required: false },
  goalStrokeWidth: { type: [ Number, String ], required: false },
  goalLineColors: { type: [ String, Array ], required: false },
  events: { type: [ String, Array ], required: false },
  eventStrokeWidth: { type: String, required: false },
  eventLineColors: { type: [ String, Array ], required: false },
  fillOpacity: { type: String, required: false },

  behaveLikeLine: { type: [ Boolean, String ], required: false, default: false }
}

/**
 * Properties of a bar chart.
 */
const BarProps = {
  id: Props.id,
  data: Props.data,
  barColors: Props.barColors,
  xkey: Props.xkey,
  ykeys: Props.ykeys,
  labels: Props.labels,
  xLabelFormat: Props.xLabelFormat,
  yLabelFormat: Props.yLabelFormat,
  xLabelAngle: Props.xLabelAngle,
  hoverCallback: Props.hoverCallback,
  grid: Props.grid,
  horizontal: Props.horizontal,
  axes: Props.axes,
  hideHover: Props.hideHover,
  stacked: Props.stacked,
  resize: Props.resize,
  ymax: Props.ymax,
  ymin: Props.ymin,
  gridTextColor: Props.gridTextColor,
  gridTextSize: Props.gridTextSize,
  gridTextFamily: Props.gridTextFamily,
  gridTextWeight: Props.gridTextWeight
}

/**
 * Properties of a donut chart.
 */
const DonutProps = {
  id: Props.id, 
  data: Props.data,
  colors: Props.colors,
  formatter: Props.formatter,
  resize: Props.resize
}

/**
 * Properties of a line chart.
 */
const LineProps = {
  id: Props.id, 
  data: Props.data,
  resize: Props.resize,
  lineColors: Props.lineColors,
  xkey: Props.xkey,
  ykeys: Props.ykeys,
  labels: Props.labels,
  xLabels: Props.xLabels,
  grid: Props.grid,
  gridTextColor: Props.gridTextColor,
  gridTextSize: Props.gridTextSize,
  gridTextFamily: Props.gridTextFamily,
  gridTextWeight: Props.gridTextWeight,
  lineWidth: Props.lineWidth,
  pointSize: Props.pointSize,
  pointFillColors: Props.pointFillColors,
  pointStrokeColors: Props.pointStrokeColors,
  ymax: Props.ymax,
  ymin: Props.ymin,
  smooth: Props.smooth,
  hideHover: Props.hideHover,
  parseTime: Props.parseTime,
  postUnits: Props.postUnits,
  preUnits: Props.preUnits,
  dateFormat: Props.dateFormat,
  xLabelFormat: Props.xLabelFormat,
  yLabelFormat: Props.yLabelFormat,
  xLabelAngle: Props.xLabelAngle,
  goals: Props.goals,
  goalStrokeWidth: Props.goalStrokeWidth,
  goalLineColors: Props.goalLineColors,
  events: Props.events,
  eventStrokeWidth: Props.eventStrokeWidth,
  eventLineColors: Props.eventLineColors,
  fillOpacity: Props.fillOpacity,
  hoverCallback: Props.hoverCallback
}

/**
 * Properties of an area chart.
 */
const AreaProps = {
  behaveLikeLine: Props.behaveLikeLine
}

for (var prop in LineProps) {
    if (LineProps.hasOwnProperty(prop)) {
        AreaProps[prop] = LineProps[prop];
    }
}

/**
 * Common methods for all the charts.
 */
const ChartMethods = {
  addOption (name, options) {
    if (this[name]) {
      options[name] = this[name]
    }
  },

  addOptionAsObject (name, options) {
    if (this[name]) {
      options[name] = Converter.toObject(this[name])
    }
  }
}

export default {
  bar: {
    props: BarProps,
    methods: ChartMethods
  },

  donut: {
    props: DonutProps,
    methods: ChartMethods
  },

  line: {
    props: LineProps,
    methods: ChartMethods
  },

  area: {
    props: AreaProps,
    methods: ChartMethods
  }
}
