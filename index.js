// TODO: Include packages needed for this application
// Needed Inquirer
const inq = require("inquirer");
const fs = require("fs");

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
        type: "list",
        name: "configs",
        message: "Are there user configurations?",
        choices: ["true", "false"]
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
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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
function writeToFile (fileName, data)
{
    // since we are going to 1. need to wait for answers to come in and 2. not doing a large write doing with the synchronous
    console.log(process.cwd(), fileName);
    fs.writeFileSync(process.cwd().concat(fileName), data);
}

// TODO: Create a function to initialize app
function init ()
{
    console.log(initNote);

    inq.prompt(questions).then((answers) =>
    {
        // #region Test Log
        // use to log the data that are captured by inquirer

        // let testData = `
        // title - ${answers.title}
        // description - ${answers.description}
        // dependancies - ${answers.dependancies}
        // tests - ${answers.tests}
        // install - ${answers.install}
        // configs - ${answers.configs}
        // author - ${answers.author}
        // author_email - ${answers.author_email}
        // author_github - ${answers.author_github}
        // author_contact - ${answers.author_contact}
        // license - ${answers.license}
        // contribute - ${answers.contribute}
        // `;
        // console.log("the data captured are", testData);

        //
        // #endregion Test Log

        writeToFile("README.md", "-default write -");
        console.log(endNote);
    }).catch((error) =>
    {
        console.log("During processing, there was an error that occurred", error);
    });
}

// Function call to initialize app
init();
