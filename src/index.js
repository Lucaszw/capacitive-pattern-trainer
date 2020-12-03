import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import './scss/main.scss';
import _ from 'lodash';

import Navbar from './js/navbar';

const navbar = new Navbar();

function main() {
    navbar.draw();

    navbar.onChangePage = (elem) => {
        const {page} = elem.dataset;
        console.log({page});
    };
}

document.addEventListener("DOMContentLoaded", function(event) { 
    main();
});