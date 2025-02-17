// poemGenerator.js
const subjects = ["The wind", "The moon", "My heart", "The stars"];
const verbs = ["whispers", "shines", "dances", "sings"];
const objects = ["in the night", "with the breeze", "of the mountains", "in silence"];

function generatePoem() {
  let subject = random(subjects);
  let verb = random(verbs);
  let object = random(objects);
  
  return `${subject} ${verb} ${object}.`;
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(generatePoem());
