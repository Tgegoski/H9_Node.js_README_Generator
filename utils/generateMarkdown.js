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
(data.README);
    return  '# $;{data.title}'
   

    Contents; {
    [Title](Title)
    [Description](Description)
    [Liscense](liscense)
    [Installation](installation)
    [Test](test)
    [Instuctions](Instructions)
    [Contribution](contribution)
    
    Title
    $;{data.title}
    Description
    $;{data.description}
    License
    $;{data.license}
     Installation
    $;{data.Install}
    Test
    $;{data.test}
    Instructions
    $;{data.Instructions}
     Contribution
    $;{data.Contribute}
        
    Contact
    GitHub :$;{git}
    Email :$;{email}
    }
{

module.exports = generateMarkdown; 

}