import _ from 'lodash';
import './style.css';

export function contact(){
    const element = document.getElementById("content");

    const pagefour = document.createElement("p");
    pagefour.textContent = "The contact button works!";

    element.appendChild(pagefour);

    // document.body.appendChild(element);



}

