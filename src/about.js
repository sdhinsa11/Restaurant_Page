import _ from 'lodash';
import './style.css';

export function about(){
    const element = document.getElementById("content");

    const pagethree = document.createElement("p");
    pagethree.textContent = "The about button works!";

    element.appendChild(pagethree);

    // document.body.appendChild(element);



}

