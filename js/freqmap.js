var formatCount = d3.format(",.0f");

var svg = d3.select("#freqmap");
var bar_margin = {top: 10, right: 30, bottom: 30, left: 30};
var bar_width = +svg.attr("width") - bar_margin.left - bar_margin.right;
var bar_height = +svg.attr("height") - bar_margin.top - bar_margin.bottom;
var g = svg.append("g").attr("transform", "translate(" + bar_margin.left + "," + bar_margin.top + ")");

var bar_data = [];

// dict => list of dicts
for (var key in vinet) {
  if (vinet.hasOwnProperty(key)) {
    bar_data.push({
      element: key,
      latpar: cellvol_to_latpar(vinet[key]['V0']),
      width: (key === 'Al') ? 2.5 : 5,
      height: (key === 'Al') ? bar_height : bar_height / 2
    });
  }
}

var x = d3.scaleLinear()
  .domain([
      d3.min(bar_data, (d) => d.latpar)*0.9999,
      d3.max(bar_data, (d) => d.latpar)*1.0001
    ])
    .range([0, bar_width]);

// Draw top ticks (colored by periodic table script)
var bar = g.selectAll(".bar")
  .data(bar_data)
  .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.latpar) + ",0)"; })
  .append('rect')
    .attr("id", (d) => `bar-${d.element}`)
    .attr('x', (d) => -d.width/2)
    .attr('y', (d) => d.height)
    .attr('height', (d) => d.height)
    .attr('width', (d) => d.width)
    .attr('opacity', 0.8)

// Prepare hidden bottom ticks (visibility toggled by periodic table script)
var bar_bottoms = g.selectAll(".bar")
  .data(bar_data)
  .append("g")
  .append('rect')
    .attr('id', (d) => `bar-${d.element}-bottom`)
    .attr('x', -1.25)
    .attr('width', 2.5)
    .attr('y', bar_height)
    .attr('height', bar_height)
    .attr('opacity', 0.8)
    .attr('class', 'vinet-mark')
    .style('display', 'none')

var ax = d3.axisBottom(x);
ax.ticks(15, "s");

g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + bar_height + ")")
    .call(ax);

