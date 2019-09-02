function get_calc_dataset() {
    var _dataset = {}

    d3.csv('./data/csv/20-1st-step-data.csv', function(error, data) {
        // first run -- init with empty lists
        data.forEach(function(d) {
            el = d.STRUCT.split('Al')[1];
            _dataset[el] = []
        });

        // second run -- populate with datapoints
        data.forEach(function(d) {
            el = d.STRUCT.split('Al')[1];
            _dataset[el].push({x: parseFloat(d.VOLUME), y: parseFloat(d.ENERGY)})
        })
    })

    return _dataset;
}
var dataset = get_calc_dataset();

birchm = get_fit_data('Birch-Murnaghan');
vinet = get_fit_data('Vinet');
elast = get_fit_data('Elastic');

function cellvol_to_latpar(vol) {
    return (vol/27)**(1.0/3.0);
}

function evol_to_eat(enrg) {
    var number_of_atoms = 108;
    return enrg/number_of_atoms;
}

var AL_LATPAR = cellvol_to_latpar(vinet.Al.V0);
var AL_BMOD = vinet.Al.B;
