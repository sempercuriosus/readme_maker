// #region Markdown Elements
// 

// Heading 
const heading1 = "#";
const heading2 = "##";
const heading3 = "###";
const heading4 = "####";
// List
const dash = "-";
// Line Break
const lineBreak = "---";
// Code Sections
const codeLine = "`";
const codeBlock = "```";

//
// #endregion Markdown Elements

// #region Imports
//

const { table } = require("console");
const { read, readdir } = require("fs");

//
// #endregion Imports

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
 * @property {string} configs          - Notes about what may be configured
 * @property {string} usage           - How to use the application
 * @property {string} deployed        - See the application in use
 * @property {string} running         - How to run the application
 * @property {string} testing         - How to test the various parts of the application
 * @property {string} contrib         - How to contribute to the application
 * @property {string} questions       - How one may contact the author for questions
 * @property {string} author          - Who wrote the application
 * @property {string} acknowledgement - Notes about who may have helped along the way
 * @property {string} note            - Notes from the author
 * @property {string} license         - License Used
 */
let readmeSections = {
  "toc":
  {
    "label": "Table Of Contents"
    , "isEnabled": true
    , "link": ""
  },
  "gettingStarted":
  {
    "label": "Getting Started"
    , "isEnabled": true
    , "link": ""
  },
  "about":
  {
    "label": "About The Project"
    , "isEnabled": true
    , "link": ""
  },
  "built":
  {
    "label": "Built With"
    , "isEnabled": true
    , "link": ""
  },
  "started":
  {
    "label": "Getting Started"
    , "isEnabled": true
    , "link": ""
  },
  "prereq":
  {
    "label": "Prerequisites & Dependencies"
    , "isEnabled": true
    , "link": ""
  },
  "install":
  {
    "label": "Installation Notes"
    , "isEnabled": true
    , "link": ""
  },
  "configs":
  {
    "label": "Configurables"
    , "isEnabled": true
    , "link": ""
  },
  "usage":
  {
    "label": "Usage"
    , "isEnabled": true
    , "link": ""
  },
  "deployed":
  {
    "label": "Deployement Location"
    , "isEnabled": true
    , "link": ""
  },
  "running":
  {
    "label": "Running The App"
    , "isEnabled": true
    , "link": ""
  },
  "testing":
  {
    "label": "Testing"
    , "isEnabled": true
    , "link": ""
  },
  "contrib":
  {
    "label": "How To Contribute"
    , "isEnabled": true
    , "link": ""
  },
  "questions":
  {
    "label": "Questions"
    , "isEnabled": true
    , "link": ""
  },
  "author":
  {
    "label": "Author Credit"
    , "isEnabled": true
    , "link": ""
  },
  "acknowledgement":
  {
    "label": "Acknowledgments"
    , "isEnabled": true
    , "link": ""
  },
  "note":
  {
    "label": "Final Note"
    , "isEnabled": true
    , "link": ""
  },
  "license":
  {
    "label": "License"
    , "isEnabled": true
    , "link": ""
  },
};

// #region License
//


// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge (license)
{
  if (!license || license !== "None")
  {
    // only if the license is not None or not empty, then return the user selected.

    const licenseSection = 
  }

  return licenseSection;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license)
{
  if (license != "None")
  {
    const licenseSection = ``;
  }
}

//
// #endregion License

// #region Make the Markdown
//

function generateMarkdown (data, dependencies)
{
  // List the dependencies the project has in package.json
  //
  const dependencyList = parseDependencies(dependencies);

  // Parse Tech Stack
  //
  const techStackUsed = parseTechStack(data.built_with);

  // Should the config section be included?
  //
  const configSection = includeConfigSection(data.configs);

  // Should there be a location to a deployed app?
  //
  const deploySection = includeDeployedSection(data.deployed);

  // Generate the Table of Contents
  //
  const tableOfConentsContent = makeTableOfContents();

  // DO NOT MODIFY LAYOUT; ONLY CONTENT
  // note, this formatting below, albeit odd, is REQUIRED to stay as is for the ` formatted string. All whitespace, tabs, cariage returns, etc. are all added in the string.
  return `
${heading1} ${data.title} 
${data.description}
${lineBreak} 

${heading2} ${readmeSections.toc.label}
<!-- TABLE OF CONTENTS -->
${tableOfConentsContent}
${lineBreak}

${heading2} ${readmeSections.about.label}${readmeSections.about.link}
<!-- About the Project - Full Description -->
${dash}
${lineBreak}

${heading2} ${readmeSections.license.label}${readmeSections.license.link}
${data.license}
${lineBreak}

${heading3} ${readmeSections.built.label}${readmeSections.built.link}
${techStackUsed}
${lineBreak}

${heading2} ${readmeSections.started.label}${readmeSections.started.link}
<!-- Getting Started  -->
${dash}
${lineBreak}

${heading3} ${readmeSections.prereq.label}${readmeSections.prereq.link}
To install the depenencies use the following command:
${dash} ${codeLine}${data.dependency_install}${codeLine} 

List of Required Dependencies and versions
${dependencyList}
${lineBreak}

To run the tests use the following command:
${dash} ${codeLine}${data.tests}${codeLine}
${lineBreak}

${heading3} ${readmeSections.install.label}${readmeSections.install.link}
${data.install}
${lineBreak}

${heading2} ${readmeSections.usage.label}${readmeSections.usage.link}
<!-- Usage - What is needed to use the application? -->
${dash}
${lineBreak}

${configSection}

${deploySection}

${heading2} ${readmeSections.running.label}${readmeSections.running.link}
<!-- Running - What is needed in running the application? -->
${dash}
${lineBreak}

${heading2} ${readmeSections.testing.label}${readmeSections.testing.link}
${dash}${data.tests}
${lineBreak}

${heading2} ${readmeSections.contrib.label}${readmeSections.contrib.link}
If you would like to contribute to the application here is how you can do that. 
Please, follow these guidelines below.

${data.contribute}
${lineBreak}

${heading2} ${readmeSections.author.label}${readmeSections.author.link}
${dash}${data.author}
${lineBreak}

${heading2} ${readmeSections.questions.label}${readmeSections.questions.link}
If you have any questions about the repo, open an issue, or would like to contact me directly here is where I can be found.
(I do not use social media of any kind.)

  ${dash}<a href="mailto:${data.email}">Send Me An Email</a> 
  ${dash}You can find more of my work on my Github [${data.github}](https://github.com/${data.github}/)
  ${dash}Here is my <a href="https://sempercuriosus.github.io/PortfolioChallenge/">Personal Webpage</a>

${lineBreak}

${heading2} ${readmeSections.acknowledgement.label}${readmeSections.acknowledgement.link}
<!-- Acknowledgments -->
${dash}
${lineBreak}

${heading2} ${readmeSections.note.label}${readmeSections.note.link}
<!-- Final Note -->
${dash}
${lineBreak}

`;
}

//
// #endregion Make the Markdown

// #region Parse Dependencies
//

/**
* Parse a list of strings to get the values from package.json
* @param {Array} list
* @returns a markdown friendly concatenated list of strings
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
* @returns a markdown friendly concatenated list of strings
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

// #region Generate TOC
// create the table of contents dynamically based on user's input

/**
* Generate the Table Of Contents Sections
* @param {} 
* @returns The isEnabled sections of the table of contents
*/
let makeTableOfContents = () =>
{
  console.info("[ makeTableOfContents ] : called");

  let tableOfContents = [];

  for (let section in readmeSections)
  {
    let linkTo = readmeSections[section].label.replaceAll(/[^a-zA-Z]+/g, "_");
    const link = "<a href=\"" + linkTo + "\"></a>";
    readmeSections[section].link = link;

    if (readmeSections[section].isEnabled === true)
    {
      let contentItem = dash + " [" + readmeSections[section].label + "]" + "(" + linkTo + ")" + "\n";

      tableOfContents.push(contentItem);
    }
  }

  console.log(tableOfContents);

  if (!tableOfContents)
  {
    return dash + "Table Of Contents";
  }

  return tableOfContents;
}; //  [ end : makeTableOfContents ]

//
// #endregion Generate TOC

// #region Deployed Section
// includes a section of where the application is deployed, if the user desires such a section.

/**
* Returns a Deployment Section
* @param {} deployed
* @returns a markdown friendly section about deployments
*/
let includeDeployedSection = (deployed) =>
{
  let deployedSection = "";

  if (deployed === true)
  {
    deployedSection = heading3
      + " "
      + readmeSections.deployed.label
      + "\n"
      + "<!-- Deployment Location -->"
      + "\n"
      + "\n"
      + lineBreak
      ;

    return deployedSection;
  }
  else 
  {
    readmeSections.deployed.isEnabled = false;
  }
}; //  [ end : includeDeployed ]

//
// #endregion Deployed Section

// #region Add Config Section
// includes a section of where the application's configurations should be, if the user desires such a section.

/**
* Creates a configuration section
* @returns a markdown friendly section for the configuration options
*/
let includeConfigSection = (configurations) =>
{
  let addConfigSection = "";

  if (configurations === true)
  {
    addConfigSection = heading3
      + " "
      + readmeSections.configs.label
      + "\n"
      + "<!-- Configurables -->"
      + "\n"
      + "\n"
      + lineBreak
      ;
  }
  else 
  {
    readmeSections.configs.isEnabled = false;
  }
  return addConfigSection;

}; //  [ end : addConfigSection ]

//
// #endregion Add Config Section

module.exports = generateMarkdown;
