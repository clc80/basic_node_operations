const commands = require("./commands");

//prompt the user for input
process.stdout.write('prompt > ');

//The stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaluate CMD is a function which will be implemented in a commands.js
  commands.evaluateCmd(userInput);
});
