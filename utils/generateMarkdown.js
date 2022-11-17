// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
class Markdown{

  static renderLicenseBadge(license) {
    const licenseBage = {
      apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      gnu3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  static renderLicenseLink(license) {
    const licenseLink = {
      apache: 'https://choosealicense.com/licenses/apache-2.0/',
      mit: 'https://choosealicense.com/licenses/mit/',
      gnu3: 'https://choosealicense.com/licenses/gpl-3.0/'
    }
      return badges[license]
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  static renderLicenseSection(license) {
    if (license){
        return `Licensed under ${this.renderlicenseLink(license)} license`
    } else {
        return ''
    }
      
  }
  
  
  // TODO: Create a function to generate markdown for README
  static generateReadMe(data) {
    return `
# ${data.projectTitle}

## license
${data.license}

## table 
- [Discription of project](#discription)
- [Installation](#installation-instructions)
- [Usage information](#usage-information)
- [Contribution information](#contribution-information)
- [Test intruction](#test-instructions)
- [lisence](#license)
- [github username](#github-username)
- [email](#email)

## Discription
${data.description}

## Installation-instructions
${data.installation}

## Usage-information
${data.usage}

## Contribution-information
${data.contribution}

## test-instructions
${data.testing}


## Github-username
${data.githubUsername}

## email
${data.email}

  `;
  }
}

module.exports = Markdown;
