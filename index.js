// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges link you want."
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide us with the installation instructions."
    },
    // {
    //     type: "input",
    //     name: "licence",
    //     message: "Please provide the licence or your badge link."
    // },
    {
        type: "list",
        name: "licence",
        message: "Which open source licence would you like to use?",
        choices: ['Apache', 'MIT', 'GPL', 'BSD', 'None']
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project test",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error){
        if (error) {
            return console.log(error)
        }
        console.log('Done\!')
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data){
        let fileName = "README.md";
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
