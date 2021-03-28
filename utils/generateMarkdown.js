// Function that returns a license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return 'https://img.shields.io/badge/Liscense-MIT-blue';
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return [renderLicenseSection]
}

//Function to generate markdown for README
const generateMarkdown = data =>
    (data.README)
   
     README;    {
    [Title](Title)
    [Description](Description)
    [Liscense](liscense)
    [Installation](installation)
    [Test](test)
    [Instuctions](Instructions)
    [Contribution](contribution)
    
    Title
    $;{answers.title}
    Description
    $;{answers.description}
    License
    $;{answers.license}
     Installation
    $;{answers.Install}
    Test
    $;{answers.test}
    Instructions
    $;{answers.Instructions}
     Contribution
    $;{answers.Contribute}
        
    Contact
    GitHub :$;{git}
    Email :$;{email}
    }
{

module.exports = generateMarkdown; 

}