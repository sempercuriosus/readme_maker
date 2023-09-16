// TODO: Include packages needed for this application
// Needed Inquirer
const inq = require("inquirer");

// #region Text the user will see
//
const initNote = "Markdown Generator Started";
const endNote = "Markdown Completed";

//
// #endregion Text the user will see

// #region Questions
//

/**
 * Is an array of objects containing questions to ask the user about their project to use with the readme generation
 */
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the README Title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the application's purpose? Enter in a brief description."
    },
    {
        type: "input",
        name: "dependancies",
        message: "To install dependancies what command can be used?",
        default: 'npm i',
    },
    {
        type: "input",
        name: "tests",
        message: "To run tests what command can be used?",
        default: "npm test",
    },
    {
        type: "input",
        name: "install",
        message: "How can the user install the application?",
    },
    {
        type: "input",
        name: "configs",
        message: "Are there user configurations?",
        default: false
    },
    {
        type: "input",
        name: "author",
        message: "Who wrote this application?"
    },
    {
        type: "input",
        name: "author_email",
        message: "What is the author's email address?"
    },
    {
        type: "input",
        name: "author_github",
        message: "What is the author's Github username?"
    },
    {
        type: "input",
        name: "author_contact",
        message: "How can the author be reached for questions?"
    },
    {
        type: "list",
        name: "license",
        message: "What License do you want to use?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: "input",
        name: "contribute",
        message: "What needs to be known so someone else contribute?"
    },
];


//
// #endregion Questions

// TODO: Create a function to write README file
function writeToFile (fileName, data) { }

// TODO: Create a function to initialize app
function init ()
{
    console.log(initNote);

    inq
        .prompt;

    console.log(endNote);
}

// Function call to initialize app
init();
