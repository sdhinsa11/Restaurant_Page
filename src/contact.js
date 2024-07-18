import _ from 'lodash';
import './style.css';

export function contact(){
    const element = document.getElementById("content");

    const divFour = document.createElement("div");
    divFour.id = "contactDiv";

    const contact = document.createElement("div");
    contact.id = "contact";
    const cont_h = document.createElement("h4");
    cont_h.textContent = "Contact";
    const email = document.createElement("p");
    email.textContent = "work@CCC.ca";
    const number = document.createElement("p");
    number.textContent = "566-909-8574";
    contact.appendChild(cont_h);
    contact.appendChild(email);
    contact.appendChild(number);

    const hours = document.createElement("div");
    hours.id = "hours";
    const hour_h = document.createElement("h4");
    hour_h.textContent = "Hours";
    const weekday = document.createElement("p");
    weekday.textContent = "Monday-Friday, 8am-8pm";
    const weekend = document.createElement("p");
    weekend.textContent = "Saturday-Sunday, 8am-3pm";
    hours.appendChild(hour_h);
    hours.appendChild(weekday);
    hours.appendChild(weekend);


    const address = document.createElement("div");
    address.id = "address";
    const add_h = document.createElement("h4");
    add_h.textContent = "Address";
    const aSentence = document.createElement("p");
    aSentence.textContent = "2020 80th Ave SW, NewPort Beach, CA";
    address.appendChild(add_h);
    address.appendChild(aSentence);

    divFour.appendChild(contact);
    divFour.appendChild(hours);
    divFour.appendChild(address);
    
    element.appendChild(divFour);


    // document.body.appendChild(element);



}

