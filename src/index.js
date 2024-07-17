// we are just appending the element
// document.body.appendChild(homePage()); 
// event listener for the module
import _ from 'lodash';
import './style.css';

import { homePage } from "./homepage";
import { menu } from "./menu";
import { about } from "./about";
import { contact } from "./contact";



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

        // const tabs = document.getElementsByClassName("tablinks");
        // for (let i = 0; i < tabs.length; i++){
        //     tabs[i].className = tabs[i].className.replace(" active", "");
        // }

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
// need event listeners 








// step 2. Hide the tabs- remove the class active

//step 3. Call the function with the tabs - 



