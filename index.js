// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//User Questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project?',
            name: 'description',
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
    ]
).then((
   answers
)=>{
const README = generateMarkdown(answers);
    createNewFile("README.md",README)
}
)
 
// Function to write README file
    function createNewFile(title,README){

    fs.writeFile(title,README,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Your README has been generated");
    })
    }

// Function to initialize app
        function init() {}
            
        function prompt(inquirer){
      
            console.log(JSON.stringify)(data, null," ");
            data.getLiscense = getLiscense(data.liscense);
            writeFile("./exampleREADME.md",data);
    }






