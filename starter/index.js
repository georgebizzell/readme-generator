const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// inquirer package install - https://www.npmjs.com/package/inquirer


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
        message: "Please provide an explanation of how to use the application: "
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
        message: "How can other people contribute?"
    },
    {
        type: "input",
        name:"tests",
        message: "How does the testing work?"
    },
    {
        type: "input",
        name:"questions",
        message: "What's your email address?"
    },
    {
        type: "input",
        name:"screenshot",
        message: "File location of a screenshot: "
    }
];

// function to write README file
function writeToFile(fileName, data) {

    console.log("write to file called");
    
    const readmeString = generateMarkdown(data);
    
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
