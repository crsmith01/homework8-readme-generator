// Globally scoped variables
//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
// const questions = [];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// Creates a writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile);

// or
const writeToFile = (answers) => {
    // writes output of user's answers to a README.md file
    fs.writeFile('README.md', answers, (error) =>
    // ternary operator to account for errors and successes
    error ? console.log('Error! Something went wrong.') : console.log('Success! Your README.md file has been created.'));
}

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
      type: 'checkbox',
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



// TODO: Create a function to initialize app
// function init() {
//     promptUser()
//       .then((answers) => writeFileAsync('README.md', generateReadme(answers)));
//       .then(() => console.log('Successfully wrote to README.md'));
//       .catch((err) => console.error(err));
//   };

// OR
const init = () => {
    promptUser()
        .then((answers) => {
            const markdown = generateMarkdown.generateMarkdown(answers)
            writeToFile(markdown)
        })
}

// This function call initializes the app.
init();



// **Make answers into userPrompt or some other placehodler??? Is answers reserved?