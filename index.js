// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require('./utils');
const generateMarkdown = require('./utils/generateMarkdown');
const generateREADME = generateMarkdown;

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
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribution',
        },
    ]  
).then((
        answers
    ) =>{
        const README = generateMarkdown;
// Function to write README file
    

    // function createNewFile("README.md", data) {

    function createNewFile(fs,README){

        fs.writeFile(README,data,(err)=>{
            if(err){
                console.log(err)
            }
                console.log("Your README has been generated");
    })
    }
// Function to initialize app
    function init() {
            inquirer.prompt(questions)
            .then(function(data) {
              writetoFile("README.md", generateMarkdown(data));  
            })
    }
    init ();
           
      try {
          
      } catch (error) {
          
      }    
})
{




}

