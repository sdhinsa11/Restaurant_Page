// we are just appending the element
// document.body.appendChild(homePage()); 
// event listener for the module
import _ from 'lodash';
import './style.css';

import { homePage } from "./homepage";
import { menu } from "./menu";
import { about } from "./about";
import { contact } from "./contact";

console.log("this is running");


document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.querySelectorAll(".tablinks");

    for(let b of buttons){
        const tabName = b.textContent;
        b.addEventListener('click',() => openTab(tabName));
    }

    function openTab(tabName){

        // clearing the tab 
        const content = document.getElementById("content");
        content.innerHTML = "";

        if (tabName === "Home"){
            homePage();
        }
        else if (tabName === "Menu"){
            menu();
        }
        else if (tabName === "About"){
            about();
        }
        else if (tabName === "Contact"){
            contact();
        }
    }
    document.getElementById("defaultOpen").click();

});



