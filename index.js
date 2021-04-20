// Globally scoped variables
//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [];
// Creates a writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    //   sets the default to the first object in the choices array in the line above (which is MIT license)
      default: 0,
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
      default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// (Arrow) function to dynamically create the README file with template literal
const generateReadme = (answers) =>
`
// license badge stuff here = with generateMarkdown.js

# ${answers.project}

## Description
${answers.description}

## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation
To install necessary dependencies, run the following command${answers.dependencies}

## Usage
${answers.repo}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
To run tests, run the following command: ${answers.test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.username}.
`


// TODO: Create a function to initialize app
function init() {}
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateReadme(answers)));
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// This function call initializes the app.
init();
