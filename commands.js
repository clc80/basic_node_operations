const fs = require('fs');

//write out data
function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput) {
  //parses the user input to understand which command was typed
  const userInputArray = userInput.split(' ');
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      //we will add the functionality of echo next within the object commandLibrary
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case "sort":
      commandLibrary.sort(userInputArray.slice(1));
    case "wc":
      commandLibrary.wc(userInputArray.slice(1));
    case "uniq":
      commandLibrary.uniq(userInputArray.slice(1));
  }

}

//where we will store the Logic of our commands
const commandLibrary = {
  //the echo commands
  "echo": function(userInput) {
    done(userInput);
  },
  //the cat commands
  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
        done(data);
    })
  },
  "sort": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
        const array = data.toString().split("\n");
        const sortedArray = array.sort();
        const stringArray = sortedArray.join("\n");
        done(stringArray);
    })
  },
  "wc": function(fullPath) {

  },
  "uniq": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
        const array = data.toString().split("\n");
        for(var i = 1; i < array.length; i++){
          if (array[i] === array[i - 1]){
            array.splice(i, 1);
          }
        }
        const stringArray = array.join("\n");
        done(stringArray);
  })
}

};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
