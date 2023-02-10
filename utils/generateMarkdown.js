// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'NONE'){
  return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
} 
return ' ';
}

// Function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.title}  ${renderLicenseBadge(data.license)}

## Table of Content
- [Project description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [Tests](#Tests)
- [Contribution](#Contribution)
- [License](#License)
- [Deployment Link](#Deployment-Link)
- [Questions](#Questions)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Tests
${data.tests}

## Contribution
${data.contribution}

## License
${data.license}

## Deployment Link
${data.deployment}

## Questions
Github: <${data.github}> \n 
For further information send me an Email to: <${data.email}>

`
;
}

module.exports = generateMarkdown;
