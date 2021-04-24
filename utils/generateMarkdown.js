// Function returns a license badge based on which license is passed in by the user
let licenseBadge;
const renderLicenseBadge = (license) => {
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
let licenseURL;
const renderLicenseLink = (license) => {
  // Switch statement because we have 5 defined cases (4 licenses and option for no license). From activity 16: Modularization 
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
      break;
  }
  return licenseURL;

}

// (Arrow) function to dynamically create the README file with template literal, inserting user responses from the prompts in Inquirer
const generateMarkdown = (responses) => {
  // Destructuring the user's responses (makes drier code in the template literal section) (from activities 25&26)
  const { project, description, dependencies, repo, license, contributing, test, email, username } = responses;
  // Bringing the license badges and links into the function that generates that markdown
  let licenseBadge = renderLicenseBadge(license[0]);
  // console.log(license[0]);
  let licenseURL = renderLicenseLink(license[0]);  

  return `
  ## Project Name
  ${project}

  ${licenseBadge}

  ## Description
  ${description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Installation
  To install necessary dependencies, run the following command: ${dependencies}

  ## Usage
  ${repo}

  ## License
  ${licenseBadge}
  This project is licensed under the ${license} license. [Read more here.](${licenseURL})

  ## Contributing
  ${contributing}

  ## Tests
  To run tests, run the following command: ${test}

  ## Questions
  If you have any questions about the repo, either open an issue or contact me directly at ${email}. You can find more of my work at ${username}.
  `
};

// Exports this file so the content can be used in other files (in this case, index.js)
module.exports = {
  generateMarkdown
}