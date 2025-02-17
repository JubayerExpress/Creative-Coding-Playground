// interactiveStory.js
let story = {
  start: {
    text: "You are standing at the entrance of a dark forest. Do you enter?",
    choices: [
      { text: "Enter the forest", next: "darkForest" },
      { text: "Turn back", next: "home" },
    ]
  },
  darkForest: {
    text: "The forest is eerie. You hear strange noises. Do you go deeper?",
    choices: [
      { text: "Go deeper", next: "deepForest" },
      { text: "Exit the forest", next: "home" },
    ]
  },
  deepForest: {
    text: "You find a treasure chest. Do you open it?",
    choices: [
      { text: "Open it", next: "treasure" },
      { text: "Leave it", next: "home" },
    ]
  },
  treasure: {
    text: "You find gold inside! You are rich! The end.",
    choices: []
  },
  home: {
    text: "You are home, safe and sound. The end.",
    choices: []
  }
};

let currentLocation = "start";

function displayStory() {
  let location = story[currentLocation];
  console.log(location.text);
  location.choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice.text}`);
  });
}

function choose(choiceIndex) {
  let location = story[currentLocation];
  currentLocation = location.choices[choiceIndex].next;
  displayStory();
}

displayStory(); // Starts the story
// To choose an option, call the choose function with an index, e.g., choose(0) for the first choice
