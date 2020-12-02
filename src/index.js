import "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import './scss/main.scss';
import _ from 'lodash';

import Navbar from './js/navbar';
import Home from './js/home';
import PizzaCreator from "./js/pizza-creator";

const navbar = new Navbar();
const home = new Home();
const pizzaCreator = new PizzaCreator();

function main() {
    navbar.draw();
    pizzaCreator.draw();
    
    window.restore = pizzaCreator.restorePizza.bind(pizzaCreator);

    navbar.onChangePage = (elem) => {
        const {page} = elem.dataset;
        console.log({page});
    };
}

document.addEventListener("DOMContentLoaded", function(event) { 
    main();
});