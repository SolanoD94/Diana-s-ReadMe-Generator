// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}  ![Licence Badge](https://img.shields.io/badge/Licence-${data.licence}-blueviolet)

## Table of Content
- [Project description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Licence](#Licence)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Licence
${data.licence}

## Questions
Github: <${data.github}>
For further information send me an Email to: <${data.email}>

`
;
}

module.exports = generateMarkdown;
