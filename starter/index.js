// Adding required modules to this js file

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name:"title",
        message: "What is the name of the application?"
    },
    {
        type: "input",
        name:"description",
        message: "Please describe your application: "
    },
    {
        type: "input",
        name:"installation",
        message: "Please explain how to install the application: "
    },
    {
        type: "input",
        name:"usage",
        message: "How is the application used?"
    },
    {
        type: "list",
        message: "Please select a license from the list: ",
        name: "license",
        choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
    },
    {
        type: "input",
        name:"contributing",
        message: "How can others contribute?"
    },
    {
        type: "input",
        name:"tests",
        message: "What is the process for testing this application?"
    },
    {
        type: "input",
        name:"email",
        message: "What's your email address?"
    },
    {
        type: "input",
        name:"github",
        message: "What's your github username?"
    },
    {
        type: "input",
        name:"screenshot",
        message: "Enter the file location of a screenshot: "
    },
    {
        type: "input",
        name:"video",
        message: "Enter a link to a walkthrough video"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    // console.log("Test console log comment : write to file called");
    
    // readmeString generated by 'generateMarkdown' function
    const readmeString = generateMarkdown(data);

    // Write resulting README content to a README file
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
        
        // Use prompt answers to write to file
        writeToFile('../README.md', answers);
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
