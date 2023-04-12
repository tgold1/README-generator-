// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = 
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project?',
    },
    {
      type: 'input',
      name: 'tableofcontents',
      message: 'What is in your table of contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How would you install this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: ['Apache 2.0', 'Creative Commons Zero v1.0 Univresal', 'GNU General Public v.2.0', 'MIT', 'Mozilla Public 2.0'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any contributors on your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Would you like to run any tests?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What is your email address?',
    },
  ])
  function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
    const markFile = generateMarkdown(data)   
        fs.writeFile('./outputs/readme.md', markFile, (err) =>
            err ? console.log(err) : console.log('README generated!')
        );
    });
}
  
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app


// Function call to initialize app
init();
