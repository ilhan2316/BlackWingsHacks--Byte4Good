import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
var appSettings = {
  databaseURL: "https://keepupnews-11dd1-default-rtdb.firebaseio.com/",
};
const app = initializeApp(appSettings);
const database = getDatabase(app);

// Define references
var reportNews = ref(database, "Report News");

onValue(reportNews, function (snapshot) {
  let itemsArray = Object.values(snapshot.val());
  console.log(itemsArray);
  let imgArray = ["powerOutage.png", "roadClosure.png"];

  for (let i = 0; i < itemsArray.length; i++) {
    const card = document.createElement("div");
    const timeSpan = document.createElement("span");
    const image = document.createElement("img");

    // Set content and attributes
    timeSpan.textContent = itemsArray[i]["Date"];
    image.src = imgArray[i];

    // Append elements to card
    card.appendChild(image); // Append image first
    card.appendChild(document.createElement("br")); // Add a line break
    card.appendChild(timeSpan);

    // Add class to card
    card.classList.add("card");

    document.getElementById("updates").appendChild(card);
  }
});
