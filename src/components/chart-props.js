/*
TODO:
  lineWidth: { type: [ Number, String ], required: false },
  pointSize: { type: [ Number, String ], required: false },
  pointFillColors: { type: [ String, Array ], required: false}, // Colors for the series points. By default uses the same values as lineColors
  pointStrokeColors: {}, // Colors for the outlines of the series points. (#ffffff by default).
  ymax: {}, // Max. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the max y-value is at least [num].
  ymin: {}, // Min. bound for Y-values. Alternatively, set this to 'auto' to compute automatically, or 'auto [num]' to automatically compute and ensure that the min y-value is at most [num]. 
  smooth: { type: [ Boolean, String ], required: false, default: true }, // Set to false to disable line smoothing.
  parseTime: {}, // Set to false to skip time/date parsing for X values, instead treating them as an equally-spaced series.
  postUnits: {}, // Set to a string value (eg: '%') to add a label suffix all y-labels.
  preUnits: {}, // Set to a string value (eg: '$') to add a label prefix all y-labels.
  dateFormat: {}, // A function that accepts millisecond timestamps and formats them for display as chart labels. 
  
  xLabelFormat: {}, //  A function that accepts Date objects and formats them for display as x-axis labels. Overrides the default formatter chosen by the automatic labeller or the xLabels option. 
  xLabelAngle: {}, // The angle in degrees from horizontal to draw x-axis labels.
  yLabelFormat: {}, //  A function that accepts y-values and formats them for display as y-axis labels. 
  goals: {}, // A list of y-values to draw as horizontal 'goal' lines on the chart. 
  goalStrokeWidth: {}, // Width, in pixels, of the goal lines.
  goalLineColors: {}, //  Array of color values to use for the goal line colors. If you list fewer colors here than you have lines in goals, then the values will be cycled.
  events: {}, // A list of x-values to draw as vertical 'event' lines on the chart. 
  eventStrokeWidth: {}, //  Width, in pixels, of the event lines.
  eventLineColors: {}, // Array of color values to use for the event line colors. If you list fewer colors here than you have lines in events, then the values will be cycled.
  fillOpacity: {}, //  Change the opacity of the area fill colour. Accepts values between 0.0 (for completely transparent) and 1.0 (for completely opaque).

  behaveLikeLine: {}, //   Set to true to overlay the areas on top of each other instead of stacking them.
}
*/

const Props = {
  id: { type: String, required: true }, 
  data: { type: [ String, Array ], required: true },
  barColors: { type: [ String, Array ], required: false },
  xkey: { type: String, required: false, default: 'key' },
  ykeys: { type: [ String, Array ], required: false, default: [ 'value' ] },
  labels: { type: [ String, Array ], required: false, default: [ 'Value' ] },
  hoverCallback: { type: Function, required: false },
  axes: { type: [ Boolean, String ], required: false, default: true },
  hideHover: { type: String, required: false },
  stacked: { type: [ Boolean, String ], required: false },
  resize: { type: [ Boolean, String ], required: false },
  grid: { type: [ Boolean, String ], required: false, default: true },
  gridTextColor: { type: String, required: false, default: '#888' },
  gridTextSize: { type: [ Number, String ], required: false, default: 12 },
  gridTextFamily: { type: String, required: false, default: 'sans-serif' },
  gridTextWeight: { type: String, required: false, default: 'normal' },

  colors: { type: [ String, Array ], required: false },
  formatter: { type: Function, required: false },

  lineColors: { type: [ String, Array ], required: false },
  xLabels: { type: String, required: false },
}

const ChartProps = {

  bar: {
    props: {
      id: Props.id,
      data: Props.data,
      barColors: Props.barColors,
      xkey: Props.xkey,
      ykeys: Props.ykeys,
      labels: Props.labels,
      hoverCallback: Props.hoverCallback,
      grid: Props.grid,
      axes: Props.axes,
      hideHover: Props.hideHover,
      stacked: Props.stacked,
      resize: Props.resize,
      gridTextColor: Props.gridTextColor,
      gridTextSize: Props.gridTextSize,
      gridTextFamily: Props.gridTextFamily,
      gridTextWeight: Props.gridTextWeight
    }
  },

  donut: {
    props: {
      id: Props.id, 
      data: Props.data,
      colors: Props.colors,
      formatter: Props.formatter,
      resize: Props.resize
    }
  },

  line: {
    props: {
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
      gridTextWeight: Props.gridTextWeight
    }
  },

  area: {
    props: {
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
      gridTextWeight: Props.gridTextWeight
    }
  }

}

export default ChartProps
