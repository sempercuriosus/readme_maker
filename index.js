// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

/**
 * Is an array of question:answer objects
 */
const questions = [
    { "question": "What is the README Title?", "answer": "" },
    { "question": "What is the application's purpose? Enter in a brief description.", "answer": "" },
    { "question": "Does the application have any dependancies?", "answer": "" },
    { "question": "How can the user install the application?", "answer": "" },
    { "question": "Are there user configurations?", "answer": "" },
    { "question": "Who wrote this application?", "answer": "" },
    { "question": "What is the author's email address?", "answer": "" },
    { "question": "What is the author's Github username?", "answer": "" },
    { "question": "How can the author be reached for questions?", "answer": "" },
    { "question": "What License do you want to use?", "answer": "" },
    { "question": "How can someone else contribute?", "answer": "" },
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) { }

// TODO: Create a function to initialize app
function init ()
{
    for (let i = 0; i < questions.length; i++)
    {
        console.log(questions[i].question, questions[i].answer);
    }
}

// Function call to initialize app
init();
