// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseText = ;
  // Switch statement because we have 5 defined cases (4 licenses and option for no license) 
  switch (license) {
    case 'MIT':
      licenseText = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseText = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break; 
    case 'General Public License 3.0':
      licenseText = '[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Berkley Software Distribution 3.0':
      licenseText = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      licenseText = ''
    }
    return licenseText;
}



// This function returns the license link to the appropriate page on opensource.org, so the user can view more information about the chosen license
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseURL = ;
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
      licenseURL = ''
  }

  return licenseURL;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if ______
  // else ______
  // OR 
  // ternary function
}
const renderLicenseSection = (license) => {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

// Exports this file so the content can be used in other files (in this case, index.js)
module.exports = generateMarkdown;s
