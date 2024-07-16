// console.log("Everything is working");

import _ from 'lodash';
import './style.css';
import cafe from './cafe.jpg';

function component() {
    const element = document.getElementById("content");
  
    // add the image 

    const myImg = new Image();
    myImg.src = cafe;
    myImg.id = "mainImg";

    element.appendChild(myImg);

    // add the text

    const para = document.createElement("p");
    para.textContent = "Our restaurant is the epitome of comfort, class and relaxation. We want to treat out guests with the utmost respect and love. Enjoy your food, its made with love!";
    element.appendChild(para);

    // add the header

    const name = document.createElement("h2");
    name.textContent = "Cozy Cove Cafe";
    element.appendChild(name);


    // going to have 4 divs with there own little styles to it 

    // img 

    // div with about 

    // another div for other functionalities 

    // then another div for  subscription 

    // then another one for contact 

  
    return element;
  }
  
  document.body.appendChild(component());