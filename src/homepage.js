import _ from 'lodash';
import './style.css';
import cafe from './cafe.jpg';

export function homePage() {
    const element = document.getElementById("content");
  
    // add the image 

    const myImg = new Image();
    myImg.src = cafe;
    myImg.id = "mainImg";

    element.appendChild(myImg);

    // div 1 with the about 
    const divOne = document.createElement("div");
    divOne.id = "divOne";

    const name = document.createElement("h2");
    const para = document.createElement("p");
    const menuBttn = document.createElement("button");

    name.textContent = "This is the Cozy Cove Cafe!!";
    para.textContent = "Our restaurant is the epitome of comfort, class and relaxation. We want to treat out guests with the utmost respect and love. Enjoy your food, its made with love!";
    menuBttn.textContent = "Menu";
    
    divOne.appendChild(para);
    divOne.appendChild(name);
    divOne.appendChild(menuBttn);
    
    element.appendChild(divOne);

    // div 2 functionalities
    const divTwo = document.createElement("div");
    divTwo.id = "divTwo";

    const specialties = document.createElement("div");
    const community = document.createElement("div");
    const workFriendly = document.createElement("div");

    specialties.id = "specialties";
    
    community.id = "community";
    
    workFriendly.id = "workFriendly";


    divTwo.appendChild(specialties);
    divTwo.appendChild(community);
    divTwo.appendChild(workFriendly);


    element.appendChild(divTwo);

    // then another div for  subscription 

    const divThree = document.createElement("div");
    divThree.id = "divThree";

    const news = document.createElement("div");
    news.id = "news";

    const sentence = document.createElement("p");
    sentence.textContent = "Sign up for our blog post to get updated on the latest events and deals.";

    const subBtn = document.createElement("button");
    subBtn.textContent = "Sign up";

    news.appendChild(sentence);
    news.appendChild(subBtn);
    divThree.appendChild(news);
    
    element.appendChild(divThree);

    // then another one for contact 

    const divFour = document.createElement("div");
    divFour.id = "divFour";

    const contact = document.createElement("div");
    contact.id = "contact";
    const email = document.createElement("p");
    email.textContent = "work@CCC.ca";
    const number = document.createElement("p");
    number.textContent = "566-909-8574";
    contact.appendChild(email);
    contact.appendChild(number);

    const hours = document.createElement("div");
    hours.id = "hours";
    const weekday = document.createElement("p");
    weekday.textContent = "Monday-Friday, 8am-8pm";
    const weekend = document.createElement("p");
    weekend.textContent = "Saturday-Sunday, 8am-3pm";
    hours.appendChild(weekday);
    hours.appendChild(weekend);


    const address = document.createElement("div");
    address.id = "address";
    const aSentence = document.createElement("p");
    aSentence.textContent = "2020 80th Ave SW, NewPort Beach, CA";
    address.appendChild(aSentence);

    divFour.appendChild(contact);
    divFour.appendChild(hours);
    divFour.appendChild(address);
    
    element.appendChild(divFour);

    // return element;

    // document.body.appendChild(element);
  }


  
