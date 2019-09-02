var margin = {top: 10, left: 20, right: 40, bottom: 20};
var canvas = {
    w: 500 - (margin.left + margin.right),
    h: 300 - (margin.top + margin.bottom)
};

var c_r = 5; // calc datapoints
var tick_width = 2.5; // fit, exp and Al const tick WIDTH
var tick_height = 100; // fit, exp and Al const tick HEIGHT

$(document).ready(function () {
  var ic = $('#infoElement');

  $('.box').click(function () {
    $('#periodic-table-header').hide();

    // unpress all buttons
    $('.priplyusnulo').removeClass('priplyusnulo');

    // hide previously pressed mark
    $('.vinet-mark').hide();

    var this_box = $(this);
    if (!this_box.hasClass('drugs-friendly')) {
      return false;
    }
    this_box.addClass('priplyusnulo');

    var element_fullname = this_box.find('span').attr('id');
    var element = this_box.find('span').text();

    select_element(element, element_fullname);

    if (settings.adaptive_coloring) {
        color_the_table(vinet, element);
    }

    // enable current mark
    $(`#bar-${element}-bottom`).show();

    return false; // no scrolling
  }); //End box click

  color_the_table(vinet, 'Al');
  if (settings.preload_calcium) {
    select_element('Ca', 'Calcium');
    $('#Calcium').parent().addClass('priplyusnulo')
  }

}); //End ready

function select_element(element, element_fullname) {
    arm_d3(dataset[element], vinet[element], get_exp_data(element));

    $('#detailsElement-fitdata').html(`<h4 class="text-center">${element_fullname}</h4>
      <!--
        <p>Calculation parameters:</p>
        <pre>
          ISMEAR = 1
          SIGMA = 0.2
          ENCUT = 700
        </pre>

        <pre>
          KPOINTS: 8x8x8
          NATOMS = 108 # of which 1 atom ${element_fullname}
        </pre>
      -->
      <table class="table table-striped table-sm table-responsive">
        <thead>
        <tr>
          <th colspan="3" class="text-center">
            EOS fit result for Al<sub>0.99</sub>${element}<sub>0.01</sub>
          </th>
        </tr>
        </thead>
        <thead class="thead-inverse">
        <tr>
          <th></th>
          <th>
             <span class="vinet-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
             Vinet
          </th>
          <th>Birch-Murnaghan</th>
        </tr>
        </thead>
        <tbody class="table-bordered">
        <tr>
          <td>a</td>
          <td>${cellvol_to_latpar(vinet[element].V0).toFixed(4)}&nbsp;&Aring;</td>
          <td>${cellvol_to_latpar(birchm[element].V0).toFixed(4)}&nbsp;&Aring;</td>
        </tr>
        <tr>
          <td>E0</td>
          <td>${evol_to_eat(vinet[element].E0).toFixed(4)}&nbsp;eV</td>
          <td>${evol_to_eat(birchm[element].E0).toFixed(4)}&nbsp;eV</td>
        </tr>
        <tr>
          <td>B</td>
          <td>${vinet[element].B.toFixed(4)}&nbsp;GPa</td>
          <td>${birchm[element].B.toFixed(4)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>BP</td>
          <td>${vinet[element].BP.toFixed(4)}</td>
          <td>${birchm[element].BP.toFixed(4)}</td>
        </tr>
        </tbody>
      </table>

      <table class="table table-striped table-sm table-responsive">
        <thead>
        <tr>
          <th colspan="3" class="text-center">
            Elastic modules results Al<sub>0.99</sub>${element}<sub>0.01</sub>
          </th>
        </tr>
        </thead>

        <tbody class="table-bordered">
        <tr>
          <td>E</td>
          <td>${elast[element].e.toFixed(2)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>G</td>
          <td>${elast[element].g.toFixed(2)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>C&prime;</td>
          <td>${elast[element].cprime.toFixed(2)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>C11</td>
          <td>${elast[element].c11.toFixed(2)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>C12</td>
          <td>${elast[element].c12.toFixed(2)}&nbsp;GPa</td>
        </tr>
        <tr>
          <td>C44</td>
          <td>${elast[element].c44.toFixed(2)}&nbsp;GPa</td>
        </tr>        
        </tbody>
      </table>
    `);

    var exp_details = get_exp_data(element);
    if (exp_details.found && !exp_details.katya_disapproves) {
        $('#detailsElement-experiment').html(`
          <table class="table">
            <thead class="thead-default">
            <tr>
              <td colspan="2">
                <span class="exp-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Experimental data for ${element_fullname} in Al
              </td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>latpar</td>
              <td>${exp_details.latpar}</td>
            </tr>
            <tr>
              <td>reference</td>
              <td>${exp_details.reference}</td>
            </tr>
            <tr>
              <td>comment</td>
              <td>${exp_details.comment}</td>
            </tr>
            </tbody>
          </table>
        `);
    } else {
        $('#detailsElement-experiment').html(`
          <table class="table">
            <thead class="thead-default">
            <tr>
              <td colspan="2">Relevant experimental data for ${element_fullname} is not available</td>
            </tr>
            </thead>
          </table>
        `);
    }
    //$('.text-currently-selected-element').text(element_fullname);
}

//d3.min(dataset, (d, i) => d), d3.max(dataset, (d, i) => d)])
function give_mappings(dataset) {
  return {
    mapX: d3.scaleLinear()
      .domain([
          d3.min(dataset, (d, i) => cellvol_to_latpar(d.x)),
          d3.max(dataset, (d, i) => cellvol_to_latpar(d.x))
      ])
      .range([0, canvas.w]),
    mapY: d3.scaleLinear()
      .domain([
          d3.max(dataset, (d, i) => evol_to_eat(d.y)),
          d3.min(dataset, (d, i) => evol_to_eat(d.y))
      ])
      .range([0, canvas.h])
  }
}

function color_the_table(dataset, central_element) {
  var latpars = [];
  for (var key in dataset) {
    if (dataset.hasOwnProperty(key)) {
      latpars.push(cellvol_to_latpar(dataset[key]['V0']))
    }
  }
  var mapX_color = d3.scaleLinear()
      .domain([
        d3.min(latpars),
        cellvol_to_latpar(dataset[central_element]['V0']),
        d3.max(latpars)
      ])
      .range([
        d3.select('#freqmap-bar-bottom').style('background-color'),
        d3.select('#freqmap-bar-middle').style('background-color'),
        d3.select('#freqmap-bar-top').style('background-color')
      ]);

  $('.drugs-friendly').map(function() {
    var element = $(this).find('span').text();
    if (element !== 'Al') {
      var this_latpar = cellvol_to_latpar(dataset[element]['V0']);
      d3.select(this).style('background', mapX_color(this_latpar)).style('opacity', 0.8);
      d3.select(`#bar-${element}`).style('fill', mapX_color(this_latpar));
      d3.select(`#scatterpoint-${element}`).style('fill', mapX_color(this_latpar));
    }
  })
}

function arm_d3(dataset, fit_point, exp_point) {
  var scales = give_mappings(dataset)

  var lineGen = d3.line()
                  .x((d, i) => scales.mapX(cellvol_to_latpar(d.x)))
                  .y((d, i) => scales.mapY(evol_to_eat(d.y)))

  //var smoothCurve = lineGen.curve(d3.curveBasis)
  svg = d3.select('#target');
  svg.remove();

  svg = d3.select('#target_div')
        .append('svg')
        .attr('id', 'target')
        .attr('width', canvas.w + margin.left + margin.right)
        .attr('height',canvas.h + margin.top + margin.bottom);

  svg.append('path')
    .attr('d', lineGen(dataset))
    .style('fill', 'none')
    .style('stroke-width', 2)
    .style('stroke', 'red')
    .style('stroke-dasharray', ("3, 3"));

  svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('r', c_r)
    .attr('cx', (d, i) => scales.mapX(cellvol_to_latpar(d.x)))
    .attr('cy', (d, i) => scales.mapY(evol_to_eat(d.y)))
    .style('opacity', 0.5)

  // add fit point
  var fit_tick = svg.append('g')
    .attr('transform', `translate(${scales.mapX(cellvol_to_latpar(fit_point['V0']))}, ${canvas.h - tick_height})`)
  fit_tick.append('rect')
    .attr('width', tick_width)
    .attr('height', tick_height)
    .attr('class', 'vinet-mark')
  fit_tick.append('text')
    .text("Vinet")
    .attr('x', 5)
    .attr('class', 'vinet-mark')
    .attr('transform', 'rotate(270, 0, 0)')

  // Al line
  var al_tick = svg.append('g')
    .attr('transform', `translate(${scales.mapX(AL_LATPAR)}, 0)`)
  al_tick.append('rect')
    .attr('width', tick_width)
    .attr('height', canvas.h)
    .attr('class', 'aliminium-mark')
  al_tick.append('text')
    .text("pure Aluminum")
    .attr('class', 'aliminium-mark')
    .style('text-anchor', 'end')
    .attr('y', -2)
    .attr('transform', 'rotate(270, 0, 0)')

  // add experimental point if it is available
  if (exp_point.found && !exp_point.katya_disapproves) {
      var exp_tick = svg.append('g')
        .attr('transform', `translate(${scales.mapX(exp_point.latpar)}, ${canvas.h - tick_height})`)
      exp_tick.append('rect')
        .attr('width', tick_width)
        .attr('height', tick_height)
        .attr('class', 'exp-mark')
      exp_tick.append('text')
        .text('Experiment')
        .attr('class', 'exp-mark')
        .attr('x', 5)
        .attr('transform', 'rotate(270, 0, 0)')
  }

  var xAxis  = d3.axisBottom().scale(scales.mapX);
  var yAxis  = d3.axisRight().scale(scales.mapY);
  svg.append('g')
        .attr('transform', `translate(0, ${canvas.h})`)
        .call(xAxis);
  svg.append('g')
        .attr('transform', `translate(${canvas.w}, 0)`)
        .call(yAxis);

  var xlabel = svg.append("g")
    .attr("transform", `translate(0, ${canvas.h})`)

  xlabel.append("text")
    .attr("text-anchor", "start")
    .attr("x", 5)
    .attr("y", -2)
    .text("lattice parameter, Å")

  var ylabel = svg.append("g")
    .attr("transform", `translate(${canvas.w}, ${canvas.h})`)

  ylabel.append('text')
    .attr("text-anchor", "start")
    .attr("x", 5)
    .attr("y", -2)
    .attr("transform", "rotate(-90)")
    .text("Energy/atom, eV")
}
