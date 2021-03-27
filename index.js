// TODO: Include packages needed for this application
const fs = require('inquirer');
const utils = require('utils');
const js_README_Generator = require('H9_Node.js_README_Generator/utils');
const generateMarkdown = generateMarkdown('any');

// TODO: Create an array of questions for user input
const promptUser = require('prompts');
const inquirer = require('inquirer');
const questions = [""]

(async () => {
    const response = await prompts(questions) 
    }
)

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
    ])
    .then(answers => {
        Response.confirm === Response.answers
            console.log('response');
    })
    .catch(error => {
        if(error.isError) {
    }   else {

    }
    }),

// TODO: Create a function to write README file
    function importScripts() {
    (inquirer, data) =>  {
    fs.writeFile(nodeModule, generateMarkdown(data),
        function (err) {
            if (err) {
                return console.log(err);
        }
})
};
    
// TODO: Create a function to initialize app
        function init() {}
            
        function prompt(inquirer)
            importScripts; ("inquirer"); {
            console.log(JSON.stringify)(data, null," ");
            data.getLiscense = getLiscense(data.liscense);
            writeFile("./exampleREADME.md",data);
    }
}

// Function call to initialize app
init();



