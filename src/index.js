window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';

    let calc = require('./parts/calc'),
        present = require('./parts/present'),
        modal = require('./parts/modal'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');
        
    calc();
    present();
    modal();
    tabs();
    timer();
    
});
    