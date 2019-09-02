$(document).ready(function() {
    plot_scatterplot();

})

function plot_scatterplot() {
  var svg = d3.select('#scatterplot');

  var c_r = 12;

  var _margin = {top: 40, right: 40, bottom: 50, left: 30};
  var _width  = +svg.attr("width")  - _margin.left - _margin.right;
  var _height = +svg.attr("height") - _margin.top  - _margin.bottom;
  var canvas = svg.append("g").attr("transform", `translate(${_margin.left}, ${_margin.top})`);

  var _data = [];

  for (var key in vinet) {
    if (vinet.hasOwnProperty(key)) {
      _data.push({
        element: key,
        latpar: cellvol_to_latpar(vinet[key]['V0']),
        bmod: vinet[key]['B']
      });
    }
  }
  
  var x = d3.scaleLinear()
    .domain([
      d3.min(_data, (d) => d.latpar)*0.9999,
      d3.max(_data, (d) => d.latpar)*1.0001
    ])
    .range([0, _width]);

  var y = d3.scaleLinear()
    .domain([
      d3.min(_data, (d) => d.bmod)*0.9999,
      d3.max(_data, (d) => d.bmod)*1.0001
    ])
    .range([0, _height]);

  var ax = d3.axisBottom(x).scale(x);
  ax.ticks(15, "s");
  var ay = d3.axisLeft(y).scale(y);
  ay.ticks(15, "s");
  var ay2 = d3.axisRight(y).scale(y);
  ay2.ticks(15, "s");

  canvas.append("g")
    .attr("class", "axis axis--x")
   // .attr("transform", `translate(0, ${_height/2})`)
    .attr("transform", `translate(0, ${y(AL_BMOD)})`)
    .call(ax);

  canvas.append("g")
    .attr("class", "axis axis--y")
    //.attr("transform", `translate(${_width/2}, 0)`)
    //.attr("transform", `translate(x(${_width/2}, 0)`)
    .attr("transform", `translate(${x(AL_LATPAR)}, 0)`)
    .call(ay);

  var xlabel = canvas.append("g")
    .attr("transform", `translate(${_width}, ${y(AL_BMOD)})`)
  xlabel.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", -5)
    .text("calculated lattice parameter, Å")

  var ylabel = canvas.append("g")
    .attr("transform", `translate(${x(AL_LATPAR)}, 0)`)

  ylabel.append('text')
    .attr("text-anchor", "end")
    .attr("x", -5)
    .attr("y", 15)
    .attr("transform", "rotate(-90)")
    .text("calculated bulk modulus, GPa")

  var points = canvas.selectAll("circle")
    .data(_data)

  var points_enter = points.enter().append("g")
      .attr("class", "scatterpoint")
      .attr("transform", function(d) { return `translate(${x(d.latpar)}, ${y(d.bmod)})`; })

  points_enter.append('circle')
    .attr("id", function() { el = d3.select(this).data()[0].element; return `scatterpoint-${el}` })
    .attr('r', c_r)
    .attr('opacity', 0.8)

  points_enter.append('text')
    .text(function() { el = d3.select(this).data()[0].element; return `${el}` })
    .attr('class', 'bubble-element')
    .attr('y', c_r/2)
}
