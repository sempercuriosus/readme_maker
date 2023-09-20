// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) { }


// #region Markdown Elements
// 

// Heading 
const heading1 = "#";
const heading2 = "##";
const heading3 = "###";
const heading4 = "####";
// List
const dash = "- ";
//
const lineBreak = "---";

//
// #endregion Markdown Elements



// The following is a template. 
// I would not expect to type all of my instructions, notes, acknowledgements, etc. at the time of generation, however, those repetitive parts are auto-generated from the node CLI questions.

/**
 * Markdown Elements showing how each part is expected to be used
 * @property {string} toc             - Table of Contents
 * @property {string} gettingStarted  - How to get started with the application
 * @property {string} about           - About the application
 * @property {string} builtWith       - What the application is built with
 * @property {string} prereq          - What is needed to run the application
 * @property {string} install         - How to install the application
 * @property {string} config          - Notes about what may be configured
 * @property {string} usage           - How to use the application
 * @property {string} running         - How to run the application
 * @property {string} testing         - How to test the various parts of the application
 * @property {string} contrib         - How to contribute to the application
 * @property {string} questions       - How one may contact the author for questions
 * @property {string} author          - Who wrote the application
 * @property {string} acknowledgement - Notes about who may have helped along the way
 * @property {string} note            - Notes from the author
 * @property {string} license         - License Used
 */
const readmeSections = {
  "toc":
  {
    "label": "Table Of Contents"
    , "include": true
  },
  "gettingStarted":
  {
    "label": "Getting Started"
    , "include": true
  },
  "about":
  {
    "label": "About The Project"
    , "include": true
  },
  "built":
  {
    "label": "Built With"
    , "include": true
  },
  "started":
  {
    "label": "Getting Started"
    , "include": true
  },
  "prereq":
  {
    "label": "Prerequisites & Dependencies"
    , "include": true
  },
  "install":
  {
    "label": "Installation Notes"
    , "include": true
  },
  "config":
  {
    "label": "Configurables"
    , "include": true
  },
  "usage":
  {
    "label": "Usage"
    , "include": true
  },
  "running":
  {
    "label": "Running The App"
    , "include": true
  },
  "testing":
  {
    "label": "Testing"
    , "include": true
  },
  "contrib":
  {
    "label": "How To Contribute"
    , "include": true
  },
  "questions":
  {
    "label": "Questions"
    , "include": true
  },
  "author":
  {
    "label": "Author Credit"
    , "include": true
  },
  "acknowledgement":
  {
    "label": "Acknowledgments"
    , "include": true
  },
  "note":
  {
    "label": "Final Note"
    , "include": true
  },
  "license":
  {
    "label": "License"
    , "include": true
  },
};

// TODO: Create a function to generate markdown for README
function generateMarkdown (data, dependencies)
{

  // #region List the Dependencies
  //

  const dependencyList = parseDependencies(dependencies);

  //
  // #endregion List the Dependencies

  // #region Parse Tech Stack
  //

  const techStackUsed = parseTechStack(data.built_with);

  //
  // #endregion Parse Tech Stack

  // #region Add Config Section
  //

  let addConfigSection = "";

  if (data.configs === true)
  {
    addConfigSection = heading3
      + " "
      + readmeSections.config
      + "\n"
      + "<!-- Configurables -->"
      + "\n"
      + "\n"
      + lineBreak
      ;
  }

  //
  // #endregion Add Config Section

  // DO NOT MODIFY LAYOUT; ONLY CONTENT
  // note, this formatting below, albeit odd, is REQUIRED to stay as is for the ` formatted string all whitespace, tabs, cariage returns, etc. are all added in the string.
  return `
${heading1} ${data.title}
${data.description}
${lineBreak} 

${heading2} ${readmeSections.toc.label}
<!-- TABLE OF CONTENTS -->
${lineBreak}

${heading2} ${readmeSections.about.label}
<!-- About the Project - Full Description -->
${dash}
${lineBreak}

${heading3} ${readmeSections.built.label}
${techStackUsed}
${lineBreak}

${heading2} ${readmeSections.started.label}
<!-- Getting Started  -->
${dash}
${lineBreak}

${heading3} ${readmeSections.prereq.label}
${data.dependency_install}

List of Required Dependencies and versions
${dependencyList}

${lineBreak}

${heading3} ${readmeSections.install.label}
${data.install}
${lineBreak}

${heading2} ${readmeSections.usage.label}
<!-- Usage - What is needed to use the application? -->
${dash}
${lineBreak}

${addConfigSection}

${heading2} ${readmeSections.running.label}
<!-- Running - What is needed in running the application? -->
${dash}
${lineBreak}

${heading2} ${readmeSections.testing.label}
${dash}${data.tests}
${lineBreak}

${heading2} ${readmeSections.contrib.label}
If you would like to contribute to the application here is how you can do that. 
Please, follow these guidelines below.

${data.contribute}
${lineBreak}

${heading2} ${readmeSections.author.label}
${dash}${data.author}
${lineBreak}

${heading2} ${readmeSections.questions.label}
If you have any questions about the repo, open an issue, or would like to contact me directly here is where I can be found.
(I do not use social media of any kind.)

  ${dash}<a href="mailto:${data.email}">Send Me An Email</a> 
  ${dash}You can find more of my work on my Github [${data.github}](https://github.com/${data.github}/)
  ${dash}Here is my <a href="https://sempercuriosus.github.io/PortfolioChallenge/">Personal Webpage</a>

${lineBreak}

${heading2} ${readmeSections.acknowledgement.label}
<!-- Acknowledgments -->
${dash}
${lineBreak}

${heading2} ${readmeSections.note.label}
<!-- Final Note -->
${dash}
${lineBreak}

${heading2} ${readmeSections.license.label}
${data.license}
${lineBreak}

`;
}

// #region Parse Dependencies
//

/**
* Parse a list of strings to get the values
* @param {Array} list
* @returns concatenated list of strings suited for markdown list
*/
let parseDependencies = (list) =>
{
  if (list)
  {
    let markdownList = "";

    for (let listItem of list)
    {
      // see if I can loop the array, then join, then return
      markdownList += "\t- " + listItem + "\n";
    }

    return markdownList;
  }
}; //  [ end : parseDependencies ]


//
// #endregion Parse Dependencies

// #region Parse Technology Used
//

/**
* Parse the technologies used to build your application
* @param {string} list semi-colon delimited list
* @returns concatenated list of strings suited for markdown list
*/
let parseTechStack = (list) =>
{
  if (list)
  {
    let techStack = [];
    let updatedTechStack = "";
    const prefix = "\t- ";
    const suffix = "\n";
    try
    {
      techStack = list.split(';');

      // if the element is not populated with anything return null and add only those items with a value
      updatedTechStack = techStack.map(element => element ? prefix + element.trim() + suffix : null).join("");

      return updatedTechStack;
    }
    catch {
      console.error("There was an issue with parsing the list of items the application was built with.");
    }
  }
  else 
  {
    // returning a dash, implying later input, if there is nothing so undefined is not listed in readme
    return dash;
  }

}; //  [ end : parseTechStack ]

//
// #endregion Parse Technology Used

module.exports = generateMarkdown;
