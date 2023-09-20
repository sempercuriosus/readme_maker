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
const mdH1 = "#";
const mdH2 = "##";
const mdH3 = "###";
const mdH4 = "####";
// List
const dash = "-";
//
const lb = "---";

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
const mdLabels = {
  "toc": "Table Of Contents",
  "gettingStarted": "Getting Started",
  "about": "About The Project",
  "built": "Build With",
  "started": "Getting Started",
  "prereq": "Prerequisites & Dependencies",
  "install": "Installation Notes",
  "config": "Configurables",
  "usage": "Usage",
  "running": "Running The App",
  "testing": "Testing",
  "contrib": "How To Contribute",
  "questions": "Questions",
  "author": "Author Credit",
  "acknowledgement": "Acknowledgments",
  "note": "Final Note",
  "license": "License",
};

// TODO: Create a function to generate markdown for README
function generateMarkdown (data, dependencies)
{
  // List the Dependencies
  const dependencyList = parseList(dependencies);

  // DO NOT MODIFY LAYOUT; ONLY CONTENT
  // note, this formatting below, albeit odd, is REQUIRED to stay as is for the ` formatted string.

  // add configs if needed
  let addConfigSection = "";

  if (data.configs === true)
  {
    console.info("adding config section");
    addConfigSection = mdH3
      + " "
      + mdLabels.config
      + "\n"
      + "<!-- Configurables -->"
      + "\n"
      + "\n"
      + lb
      ;
  }

  return `
${mdH1} ${data.title}
${data.description}
${lb} 

${mdH2} ${mdLabels.toc}
  <!-- TABLE OF CONTENTS -->
${lb}

${mdH2} ${mdLabels.about}
<!-- About the Project -->
${lb}

${mdH3} ${mdLabels.built}
<!-- Built With -->
${lb}

${mdH2} ${mdLabels.started}
<!-- Getting Started  -->
${lb}

${mdH3} ${mdLabels.prereq}
${data.dependency_install}

List of Required Dependencies and versions
${dependencyList}

${lb}

${mdH3} ${mdLabels.install}
${data.install}
${lb}

${mdH2} ${mdLabels.usage}
<!-- Usage -->
${lb}

${addConfigSection}

${mdH2} ${mdLabels.running}
<!-- Running -->
${lb}

${mdH2} ${mdLabels.testing}
${data.tests}
${lb}

${mdH2} ${mdLabels.contrib}
${data.contribute}
${lb}

${mdH2} ${mdLabels.author}
${data.author}
${lb}

${mdH2} ${mdLabels.questions}
  If you have any questions about the repo, open an issue, or would like to contact me directly here is where I can be found.
  (I do not use social media of any kind.)

    - <a href="mailto:${data.email}">Send Me An Email</a> 
    - You can find more of my work on my Github [${data.github}](https://github.com/${data.github}/)
    - Here is my <a href="https://sempercuriosus.github.io/PortfolioChallenge/">Personal Webpage</a>

${lb}

${mdH2} ${mdLabels.acknowledgement}
<!-- Acknowledgments -->
-
${lb}

${mdH2} ${mdLabels.note}
<!-- Final Note -->
-
${lb}

${mdH2} ${mdLabels.license}
${data.license}
${lb}

`;
}

// #region Parse List
//

/**
* Parse a list of strings to get the values
* @param {Array} list
* @returns concatenated list of strings suited for markdown list
*/
let parseList = (list) =>
{
  console.info("[ parseList ] : called", list);

  if (list)
  {
    let markdownList = "";

    for (let listItem of list)
    {
      markdownList += "\t- " + listItem + "\n";
    }

    return markdownList;
  }
}; //  [ end : parseList ]


//
// #endregion Parse List


module.exports = generateMarkdown;
