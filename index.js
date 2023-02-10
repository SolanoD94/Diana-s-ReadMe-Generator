// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input with conditions
const questions = [
    {
      type: 'input',
      message: 'What is your projects title?',
      name: 'title',
      validate: function(answer){
        if(answer.length < 1) {
          return console.log("You need a title for your project.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Describe your project in a few words?',
      name: 'description',
      validate: function(answer){
        if(answer.length < 1) {
          return console.log("You need a description for your project.");
        }
        return true;
      }
    },
    {
        type: 'input',
        message: 'Explain the user how they can use the project.',
        name: 'usage',
      },
    {
      type: 'list',
      message: 'Choose a license type.',
      name: 'license',
      choices: ["MIT", "ISC", "GNU GPLv3", "Apache License 2.0", "none"],
      validate: function(answer){
        if(answer === "none"){
          return val(" ")
        }
      },
      filter(val) {
          return val.toUpperCase();
      }
    },
    {
      type: 'input',
      message: 'Let users know how they can contribute to your project.',
      name: 'contribution',
      default: 'front-end'
    },
    {
      type: 'input',
      message: 'How to install and run the project?',
      name: 'installation',
      default: 'run npm i command to install dependencies'
    },
    {
      type: 'input',
      message: 'Describe the tests needed for your app to work.',
      name: 'tests',
      default: 'run command npm run test'
    },
    {
      type: 'input',
      message: 'Insert deployment link',
      name: 'deployment'
    },
    {
      type: 'input',
      message: 'Write your Github link.',
      name: 'github',
      default: 'https://github.com/SolanoD94',
      validate: function(answer){
        if(answer.length < 1) {
          return console.log("You need to write the link to your Github repo.");
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Write your email',
      name: 'email',
      default: 'solano.diana@hotmail.com'
    }
  ];
  
//TODO: Create a function to write README file
function writeFile(data) {
    fs.writeFile ("testREADME.md",generateMarkdown(data), (err) => {err ? console.error(err) : console.log('Success! You have created a ReadMe file!')})

}


// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(response => {
      console.log("Your answers:", response)
      writeFile(response);
    });

}

init();
