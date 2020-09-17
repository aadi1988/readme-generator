console.log(process.argv)
const inquirer = require('inquirer');
const EditorPrompt = require('inquirer/lib/prompts/editor');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');
// array of questions for user
const questions = [
    {
       name: 'projectTitle',
       message: 'What is your project title(required)',
       validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid project title";
            }
            return true;
       }
    },
    {
        name: 'description',
        message: 'Give a description for your project'
    },
    {
        type: 'editor',
        name: 'installInstr',
        message: 'Please provide installation instructions'
    },
    {
        name:'usage',
        message: 'Please give usage information'
    },
    {
        name: 'contribute',
        message: 'Please provide guidelines for others to contribute to the project'
    },
    {
        name: 'test',
        message: 'Please provide test instructions for the project'
    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'GNU GPLv2', 'CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'SIL Open Font License 1.1', 'Boost Software License 1.0', 'The Unilicense'], 
        message: 'Please choose a license'
    },
    {
        name: 'gitHubUser',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        message: 'Please give your email address'
    }
];

// function to write README file
function writeToFile(fileName, data) {
       fs.writeFile(fileName,data,function(err){
           if(err) throw err;
           console.log('Wrote to file');
       })
}

// function to initialize program
function init() {
     inquirer.prompt(questions)
     .then(answers => {
          console.log(answers['installInstr']);
          var final = generateMarkdown(answers);
          console.log(final);
          writeToFile('README_1.md',final);
     })
     .catch(error => {
          console.log(error);
     })
}

// function call to initialize program
init();
