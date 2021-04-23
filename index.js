//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Function to write README file
const writeToFile = (userInput) => {
    // Writes output of user's answers to a README.md file
    fs.writeFile('README.md', userInput, (error) =>
    // Ternary operator to account for errors and successes
    error ? console.log('Error! Something went wrong.') : console.log('Success! Your README.md file has been created.'));
};

// Function to use Inquirer to ask user for input
// promptUser = () => {
//     return inquirer.prompt([
const questions = [
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
    //   Sets the default to the first object in the choices array in the line above (which is MIT license)
      default: 0,
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
    //   Sets the default dependencies installation command as npm i 
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'What command should be used to run tests?',
      name: 'test',
    //   Sets the default command to run tests as 'npm test'
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
];
// Just added when made questions array
const promptUser = () => {
    return inquirer.prompt(questions)
}


// TODO: When trying to use util and promisify 
// const init = () => {
//     promptUser()
//     .then((userInput) => writeToFile('README.md', generateMarkdown(userInput)))
//     .then(() => console.log('Successfully wrote to README.md'))
//     .catch((err) => console.error(err));
// }

// Function to initialize the app.
const init = () => {
    promptUser()
        .then((userAnswers) => {
            const markdown = generateMarkdown.generateMarkdown(userAnswers)
            writeToFile(markdown)
        })
};


// Function call to initialize the app
init();
