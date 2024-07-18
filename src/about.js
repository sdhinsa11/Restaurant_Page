import _ from 'lodash';
import './style.css';

export function about(){
    const element = document.getElementById("content");

    const aDiv = document.createElement("div");
    aDiv.id = "aDiv";

    const aboutDiv = document.createElement("div");
    aboutDiv.id = "aboutDiv";
    const about_T = document.createElement("h2");
    about_T.textContent = "About Us";
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to Cozy Cove Cafe, where the tranquil beauty of the ocean meets the warmth of a cozy retreat. Inspired by the serene, soothing essence of the sea, Cozy Cove Cafe is a haven for those seeking comfort, relaxation, and a touch of vacation vibes. Nestled in a peaceful corner, our cafe offers a delightful escape from the hustle and bustle of everyday life. With a menu crafted to satisfy your cravings for good food and exceptional service, we invite you to unwind, savor the flavors, and let the calmness of Cozy Cove envelop you. Whether you're here for a quick coffee break or a leisurely meal, Cozy Cove Cafe is your sanctuary by the sea."

    aboutDiv.appendChild(about_T);
    aboutDiv.appendChild(paragraph);

    aDiv.appendChild(aboutDiv)




    element.appendChild(aDiv);

    // document.body.appendChild(element);



}

