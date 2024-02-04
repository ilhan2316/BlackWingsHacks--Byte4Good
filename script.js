import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

var appSettings = {
    databaseURL: "https://keepupnews-11dd1-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

// Define references
var cityNewsRef = ref(database, "City News");
var eventsRef = ref(database, "Events");
var volunteerRef = ref(database, "Volunteer");

onValue(cityNewsRef, function(snapshot){
    let itemsArray = Object.values(snapshot.val());
    let imgArray = ["guyincar.png"];

    for (let i = 0; i < itemsArray.length; i++){
        const card = document.createElement('div');
        const descriptionParagraph = document.createElement('p');
        const address = document.createElement('p');
        const time = document.createElement('p');
        const timeSpan = document.createElement('span');
        const image = document.createElement('img');

        // Set content and attributes
        descriptionParagraph.textContent = itemsArray[i]["Description"].length > 25 ? itemsArray[i]["Description"].substring(0, 25) + '...' : itemsArray[i]["Description"];
        timeSpan.textContent = itemsArray[i]["Date"] + " " + itemsArray[i]["Time"];
        image.src = imgArray[i];
        address.textContent = itemsArray[i]["Address"];

        // Append elements to card
        card.appendChild(image); // Append image first
        card.appendChild(descriptionParagraph);
        card.appendChild(address);
        card.appendChild(timeSpan);

        // Add class to card
        card.classList.add('card');
    
        document.getElementById("news").appendChild(card);
    }
});

onValue(eventsRef, function(snapshot){
    let itemsArray = Object.values(snapshot.val());
    let imgArray = ["POOL.png", "skirt.png"];

    for (let i = 0; i < itemsArray.length; i++){
        const card = document.createElement('div');
        const descriptionParagraph = document.createElement('p');
        const address = document.createElement('p');
        const time = document.createElement('p');
        const timeSpan = document.createElement('span');
        const image = document.createElement('img');

        // Set content and attributes
        descriptionParagraph.textContent = itemsArray[i]["Description"].length > 25 ? itemsArray[i]["Description"].substring(0, 25) + '...' : itemsArray[i]["Description"];
        timeSpan.textContent = itemsArray[i]["Date"] + " " + itemsArray[i]["Time"];
        image.src = imgArray[i];
        address.textContent = itemsArray[i]["Address"];

        // Append elements to card
        card.appendChild(image); // Append image first
        card.appendChild(descriptionParagraph);
        card.appendChild(address);
        card.appendChild(timeSpan);

        // Add class to card
        card.classList.add('card');
    
        document.getElementById("events").appendChild(card);
    }
});

onValue(volunteerRef, function(snapshot){
    let itemsArray = Object.values(snapshot.val());
    let imgArray = ["heart5k.png", "green.png"];

    for (let i = 0; i < itemsArray.length; i++){
        const card = document.createElement('div');
        const descriptionParagraph = document.createElement('p');
        const address = document.createElement('p');
        const time = document.createElement('p');
        const timeSpan = document.createElement('span');
        const image = document.createElement('img');

        // Set content and attributes
        descriptionParagraph.textContent = itemsArray[i]["Description"].length > 25 ? itemsArray[i]["Description"].substring(0, 25) + '...' : itemsArray[i]["Description"];
        timeSpan.textContent = itemsArray[i]["Date"] + " " + itemsArray[i]["Time"];
        image.src = imgArray[i];
        address.textContent = itemsArray[i]["Address"];

        // Append elements to card
        card.appendChild(image); // Append image first
        card.appendChild(descriptionParagraph);
        card.appendChild(address);
        card.appendChild(timeSpan);

        // Add class to card
        card.classList.add('card');
    
        document.getElementById("volunteer").appendChild(card);
    }
});