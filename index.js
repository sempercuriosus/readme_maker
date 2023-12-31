// Needed Inquirer
const inq = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

// #region Get Dependencies
//

/**
* Get Dependencies
* @returns The list of dependencies from package.json
*/
let getDependencies = () =>
{
    try
    {
        // Read the package.json file
        const data = fs.readFileSync('./package.json', 'utf8');

        // Parse content
        const packageJson = JSON.parse(data);

        // Get the dependencies and add it to an array
        const dependencies = packageJson.dependencies;
        const dependencyList = [];

        // Iterate over the dependencies object
        for (let dependency in dependencies)
        {
            // Get the dependency name and version
            const dependencyName = dependency;
            const dependencyVersion = dependencies[dependency];

            // Create a string with the dependency name and version
            const dependencyString = dependencyName + " required version: " + dependencyVersion;

            // Add to the array
            dependencyList.push(dependencyString);
        }

        // Return the dependency with the version needed
        return dependencyList;
    }
    catch
    {
        console.error("There was an error in getting the dependencies from package.json.", "See the details below: ");
        console.error(err);
    }

}; //  [ end : getDependencies ]

//
// #endregion Get Dependencies

// #region Notes the user will see
//
const initNote = "Markdown Generator Started";
const endNote = "Markdown Completed - Your README.md has been created!";

//
// #endregion Notes the user will see

// #region Questions
//

/**
 * Is an array of objects containing questions to ask the user about their project to use with the readme generation
 */
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title you want to use for the README?",
        default: "TITLE",
    },
    {
        type: "input",
        name: "description",
        message: "Enter in a brief description about the application and the purpose it has.",
        default: "DESCRIPTION",
    },
    {
        type: "input",
        name: "built_with",
        message: "What was your application built with? \n\tEnter a ';' (semi-colon) with each new item you want to add.\n\tEG: Node.js; Python; etc;\n",
        default: "",
    },
    {
        type: "input",
        name: "dependency_install",
        message: "To install dependencies what command can be used?",
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
        default: "",
    },
    {
        type: "confirm",
        name: "configs",
        message: "Are there user configurations?",
        default: false
    },
    {
        type: "input",
        name: "author",
        message: "Who wrote this application?",
        default: "Eric Hulse",
    },
    {
        type: "input",
        name: "author_email",
        message: "What is the author's email address?",
        default: "EMAIL@HOST.COM",
    },
    {
        type: "input",
        name: "author_github",
        message: "What is the author's Github username?",
        default: "sempercuriosus",
    },
    {
        type: "list",
        name: "license",
        message: "What License do you want to use?",
        choices: ["MIT", "APACHE2", "GPL3", "BSD3", "None"],
        default: "None",
    },
    {
        type: "input",
        name: "contribute",
        message: "What needs to be known so someone else contribute?",
        default: "",
    },
    {
        type: "confirm",
        name: "deployed",
        message: "Should there be a section about where the application is deployed?",
        default: false
    }
];


//
// #endregion Questions

function writeToFile (fileName, data)
{
    // since we are going to 1. need to wait for answers to come in and 2. not doing a large write doing with the synchronous
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init ()
{

    const dependencies = getDependencies();

    console.log(initNote);

    inq.prompt(questions).then((answers) =>
    {
        // #region Test Log
        // use to log the data that are captured by inquirer

        // let testData = `
        // title - ${answers.title}
        // description - ${answers.description}
        // dependencies - ${answers.dependencies}
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

        writeToFile("README.md", generateMarkdown(answers, dependencies));
        console.log(endNote);
    }).catch((error) =>
    {
        console.log("During processing, there was an error that occurred", error);
    });
}

// Function call to initialize app
init();
