// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const Markdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "projectTitle",
        message:  "What is your project title? ",
      },
      {
        type: 'input',
        name: 'description',
        message: "Whats your project description. ",
      },
      {
        type: 'input',
        name: 'installation',
        message: "What is the installation intructions? ",
      },
      {
        type: 'input',
        name: 'usage',
        message:"Usage information? ",
      },
      {
        type: 'input',
        name: 'contribution',
        message: "Contribution guidelines? ",
      },
      {
        type: 'input',
        name: 'testing',
        message:  "Test intructions? ",
      },
      {
          type: 'list',
          name: 'license',
          message: "What license will you use? ",
          choices: ['apache', 'mit', 'gnu3']
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: "What is your GitHub username? ",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is your email? ",
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then ((data) => {
            const result = Markdown.generateReadMe(data)
            fs.writeFile('README.md', result, function(err) {
                if(err){
                    console.log('failed to save file');
                } else {
                    console.log('succesfully generated a readME')
                }
            })
        })
        .catch((error) => {
                console.log(error)
        })
}



// Function call to initialize app
init()
