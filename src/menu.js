import _ from 'lodash';
import './style.css';

export function menu(){
    const element = document.getElementById("content");

    const menu_div = document.createElement("div");
    menu_div.id = "menuDiv";

    //header
    const menu_header = document.createElement("h2");
    
    menu_header.textContent = "Menu";

    menu_div.appendChild(menu_header);

    // menu items
    // 3 divs- same size - FOOD and Drinks and bakes goods

    const menuItems = document.createElement("div");
    menuItems.id = "menuItems";

    const itemOne = document.createElement("div");
    itemOne.id = "itemOne";
    const nameOne = document.createElement("h3");
    const priceOne = document.createElement("p");
    nameOne.textContent = "Iced Chai";
    priceOne.textContent = "$4.00";
    itemOne.appendChild(nameOne);
    itemOne.appendChild(priceOne);
    menuItems.appendChild(itemOne);

    const itemTwo = document.createElement("div");
    itemTwo.id = "itemTwo";
    const nameTwo = document.createElement("h3");
    const priceTwo = document.createElement("p");
    nameTwo.textContent = "Cake pop";
    priceTwo.textContent = "$2.00";
    itemTwo.appendChild(nameTwo);
    itemTwo.appendChild(priceTwo);
    menuItems.appendChild(itemTwo);

    const itemThree = document.createElement("div");
    itemThree.id = "itemThree";
    const nameThree = document.createElement("h3");
    const priceThree = document.createElement("p");
    nameThree.textContent = "Grilled Turkey Sandwhich";
    priceThree.textContent = "$6.00";
    itemThree.appendChild(nameThree);
    itemThree.appendChild(priceThree);
    menuItems.appendChild(itemThree);

    const itemFour = document.createElement("div");
    itemFour.id = "itemFour";
    const nameFour = document.createElement("h3");
    const priceFour = document.createElement("p");
    nameFour.textContent = "Iced Matcha Latte";
    priceFour.textContent = "$4.00";
    itemFour.appendChild(nameFour);
    itemFour.appendChild(priceFour);
    menuItems.appendChild(itemFour);

    

    menu_div.appendChild(menuItems)


    element.appendChild(menu_div);

    // document.body.appendChild(element);

}

