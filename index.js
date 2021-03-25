// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('generate-readme');
const utils = require('.utils');
const generateMarkdown = generateMarkdown('./utils/generateMarkdown');
const generateReadme = generateReadme('./package.json');


// TODO: Create an array of questions for user input
const questions = [''];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project?',
            name: 'info',
        },
        {
            type: 'list',
            message: 'What kind of liscense should your project have?',
            name: 'liscense',
            choices: ['MIT', 'Open Source', 'BSD'],
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'command',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribute',
        },
    ]).then(answers => {

    })


// TODO: Create a function to write README file
// function writeToFile(README, data) {
// }
// ]).then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//  );
// });
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



