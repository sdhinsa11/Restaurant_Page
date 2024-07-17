import _ from 'lodash';
import './style.css';

export function menu(){
    const element = document.getElementById("content");

    const pagetwo = document.createElement("p");
    pagetwo.textContent = "The menu button works!";

    element.appendChild(pagetwo);

    // document.body.appendChild(element);


}

