// Function returns a license badge based on which license is passed in by the user
const renderLicenseBadge = (license) => {
  let licenseBadge;
  // Evaluates user input for the 5 license choices. Switch statement because we have 5 defined cases (4 licenses and option for no license) 
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break; 
    case 'General Public License 3.0':
      licenseBadge = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Berkley Software Distribution 3.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      // If there is no license, return an empty string.
      licenseBadge = '';
      break;
    }
    return licenseBadge;
}



// This function returns the license link to the appropriate page on opensource.org, so the user can view more information about the chosen license.
const renderLicenseLink = (license) => {
  let licenseURL;
  // Switch statement because we have 5 defined cases (4 licenses and option for no license) 
  switch (license) {
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      break; 
    case 'General Public License 3.0':
      licenseURL = 'https://opensource.org/licenses/GPL-3.0';
      break;
    case 'Berkley Software Distribution 3.0':
      licenseURL = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'None':
      // If there is no license, return an empty string.
      licenseURL = '';
  }

  return licenseURL;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// const renderLicenseSection = (data) => {
  // const licenseBadge = renderLicenseBadge(license);
  // const licenseURL = renderLicenseLink(license);
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// (Arrow) function to dynamically create the README file with template literal, inserting user responses from the prompts in Inquirer
const generateMarkdown = (answers) => {
// should answers be data??? lines 61-62 provided or something I added?????
  const licenseBadge = renderLicenseBadge(license);
  const licenseURL = renderLicenseLink(license);  

  return `
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
If you have any questions about the repo, either open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.username}.
`
}

// Exports this file so the content can be used in other files (in this case, index.js)
// should it be module.exports = {
  // generateMarkdown: generateMarkedown}
module.exports = generateMarkdown;
