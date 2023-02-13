const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Not sure if this is required given the line above??
// import inquirer from 'inquirer';

// inquirer package install - https://www.npmjs.com/package/inquirer


// array of questions for user
const questions = [
    {
        type: "input",
        name:"title",
        message: "What is the name of the application?"
    }

];

// function to write README file
function writeToFile(fileName, data) {

    console.log("write to file called");
    var readmeString = "test string"; 
    
    // `# ${data.title}`;  

    fs.writeFile(fileName, readmeString, function(errorCheck)
    {
        if(errorCheck) {
            console.log("Error");
        }
        else {
            console.log("ReadMe created");
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Use user feedback for... whatever!!
        writeToFile('READMEtest.md', answers);
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log("Something else went wrong");
        }
      });
}

// function call to initialize program
init();
