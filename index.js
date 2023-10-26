const inquirer = require(`inquirer`);
const fs = require(`fs`);

const generateReadme = ({title, description, installation, instructions, usage, test, credits, license, contribute, features, github, email}) => {
    return `
# Project Title
    ${title}
![License: ${license}](https://img.shields.io/badge/License-${license}-lightblue.svg)
## Description
    ${description}
## Installation
    ${installation}
## Instructions
    ${instructions}
## Usage
    ${usage}
## Test
    ${test}
## Credits
    ${credits}
## License
![License: ${license}](https://img.shields.io/badge/License-${license}-lightblue.svg)
## How to Contribute
    ${contribute}
## Features
    ${features}
## Questions
https://github.com/${github}?tab=repositories
${email}
    `
}

inquirer
.prompt([
    {
        type: `input`,
        name: `title`,
        message: "What's your ReadMe title?"
    },
    {
        type: `input`,
        name: `description`,
        message: "Write ReadMe description"
    },
    {
        type: `input`,
        name: `installation`,
        message: "Provide information about installation"
    },
    {
        type: `input`,
        name: `instructions`,
        message: "Explain instructions on how to use"
    },
    {
        type: `input`,
        name: `usage`,
        message: "explain usage"
    },
    {
        type: `input`,
        name: `test`,
        message: "explain test"
    },
    {
        type: `input`,
        name: `credits`,
        message: "List recources used"
    },
    {
        type: `checkbox`,
        name: `license`,
        message: "list license",
        choices: [
            'MIT',
            'Apache',
            'GPLv3',
            'BSD',
            `Unlicense`,
            `Zlip`,
        ],
    },
    {
        type: `input`,
        name: `contribute`,
        message: "Explain how to Contribute"
    },
    {
        type: `input`,
        name: `features`,
        message: "Explain the features"
    },
    {
        type: `input`,
        name: `github`,
        message: "Please enter your GitHub username"
    },
    {
        type: `input`,
        name: `email`,
        message: "What is your email?"
    },
])
.then((answers) => {
    console.log(answers);
    const ReadMe = generateReadme(answers);
    fs.writeFileSync(`templateREADME.md`, ReadMe, (err) =>{
        err? console.log(err) : console.log(`success`)
    });
});