// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const questions = [
    "What is the README Title?",
    "What is the application's purpose? Enter in a brief description.",
    "Does the application have any dependancies?",
    "How can the user install the application?",
    "Are there user options?",
    "Who wrote this application?",
    "What is the author's email address?",
    "What is the author's Github username?",
    "How can the author be reached for questions?",
    "What License do you want to use?",
    "How can someone else contribute?",
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) { }

// TODO: Create a function to initialize app
function init ()
{

    for (let i = 0; i < questions.length; i++)
    {
        console.log(questions[i]);
    }
}

// Function call to initialize app
init();
