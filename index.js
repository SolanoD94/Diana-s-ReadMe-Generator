// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
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
      message: 'Describe the instalattion process of your app',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Project usage?',
        name: 'usage',
      },
    {
        type: 'input',
        message: 'Contribution Info?',
        name: 'crontribution',
    },
    {
        type: 'list',
        message: 'Choose a licence type.',
        name: 'licence',
        choices: ["MIT", "ISC", "GNUPLv3"],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
      type: 'input',
      message: 'Write a description of the tests needed for the apps code',
      name: 'tests',
  },
    {
        type: 'input',
        message: 'Write your Github link.',
        name: 'github',
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
