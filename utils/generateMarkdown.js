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

// #region readmeSections
// This is where each of the markdown sections can be enabled/disabled depending on user actions. 
// As of 24 Sept, 2023, not all the sections are configurable, HOWEVER, in the readmeSections object they _can_ are set up to work that way.

// #region PARAM LIST
//
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

//
// #endregion PARAM LIST
let readmeSections = {
  "toc":
  {
    "label": "Table Of Contents"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "gettingStarted":
  {
    "label": "Getting Started"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "about":
  {
    "label": "About The Project"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "license":
  {
    "label": "License"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "built":
  {
    "label": "Built With"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "started":
  {
    "label": "Getting Started"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "prereq":
  {
    "label": "Prerequisites & Dependencies"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "install":
  {
    "label": "Installation Notes"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "configs":
  {
    "label": "Configurables"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "usage":
  {
    "label": "Usage"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "deployed":
  {
    "label": "Deployement Location"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "running":
  {
    "label": "Running The App"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "testing":
  {
    "label": "Testing"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "contrib":
  {
    "label": "How To Contribute"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "questions":
  {
    "label": "Questions"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "author":
  {
    "label": "Author Credit"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "acknowledgement":
  {
    "label": "Acknowledgments"
    , "isEnabled": true
    , "linkToSection": ""
  },
  "note":
  {
    "label": "Final Note"
    , "isEnabled": true
    , "linkToSection": ""
  },
};




//
// #endregion readmeSections

// #region Make the Markdown
// This is where the bulk of the work is done creating the actual markdown output for the README file.
//
// What is made is a template with added content from the user. 
// I am not expecting that the developer making a README will sit and try to type and format all of their instructions, notes, acknowledgements, etc. using the command line at the time of README generation, however, there are parts that this is suited for and can be included immediately.

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

  // What License Should Be Included?
  //
  const licenseSection = renderLicenseSection(data.license);

  // Generate the Table of Contents
  //
  const tableOfConentsContent = makeTableOfContents();

  // DO NOT MODIFY LAYOUT; ONLY CONTENT
  // note the formatting below, albeit odd, this is REQUIRED to stay as is for the ` formatted string. 
  // All whitespace, tabs, cariage returns, etc. are all added into the string and will be included in the output of the README document.
  return `
${heading1} ${data.title} 
${data.description}
${lineBreak} 

${heading2} ${readmeSections.toc.label}
<!-- TABLE OF CONTENTS -->
${tableOfConentsContent}
${lineBreak}

${heading2} ${readmeSections.about.label}${readmeSections.about.linkToSection}
<!-- About the Project - Full Description -->
${dash}
${lineBreak}

${licenseSection}${readmeSections.license.linkToSection}

${heading3} ${readmeSections.built.label}${readmeSections.built.linkToSection}
${techStackUsed}
${lineBreak}

${heading2} ${readmeSections.started.label}${readmeSections.started.linkToSection}
<!-- Getting Started  -->
${dash}
${lineBreak}

${heading3} ${readmeSections.prereq.label}${readmeSections.prereq.linkToSection}
To install the depenencies use the following command:
${dash} ${codeLine}${data.dependency_install}${codeLine} 

List of Required Dependencies and versions
${dependencyList}
${lineBreak}

To run the tests use the following command:
${dash} ${codeLine}${data.tests}${codeLine}
${lineBreak}

${heading3} ${readmeSections.install.label}${readmeSections.install.linkToSection}
${data.install}
${lineBreak}

${heading2} ${readmeSections.usage.label}${readmeSections.usage.linkToSection}
<!-- Usage - What is needed to use the application? -->
${dash}
${lineBreak}

${configSection}

${deploySection}

${heading2} ${readmeSections.running.label}${readmeSections.running.linkToSection}
<!-- Running - What is needed in running the application? -->
${dash}
${lineBreak}

${heading2} ${readmeSections.testing.label}${readmeSections.testing.linkToSection}
${dash} ${data.tests}
${lineBreak}

${heading2} ${readmeSections.contrib.label}${readmeSections.contrib.linkToSection}
If you would like to contribute to the application here is how you can do that. 

Please, follow these guidelines below:
${data.contribute}
${lineBreak}

${heading2} ${readmeSections.author.label}${readmeSections.author.linkToSection}
${dash}${data.author}
${lineBreak}

${heading2} ${readmeSections.questions.label}${readmeSections.questions.linkToSection}
If you have any questions about the repo, open an issue, or would like to contact me directly here is where I can be found.
(I do not use social media of any kind.)

  ${dash}<a href="mailto:${data.author_email}">Send Me An Email</a> 
  ${dash}You can find more of my work on my Github [${data.author_github}](https://github.com/${data.author_github}/)
  ${dash}Here is my <a href="https://sempercuriosus.github.io/PortfolioChallenge/">Personal Webpage</a>

${lineBreak}

${heading2} ${readmeSections.acknowledgement.label}${readmeSections.acknowledgement.linkToSection}
<!-- Acknowledgments -->
${dash}
${lineBreak}

${heading2} ${readmeSections.note.label}${readmeSections.note.linkToSection}
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

// #region Create Link 
//

/**
* Make an anchor link to a section in the README
* @param {} section is the section you want to link to
* @returns link to "section"
*/
let createLink = (section) =>
{
  console.info("[ createLink ] : called");

  if (section)
  {
    const sectionName = section.replaceAll(/[^a-zA-Z]+/g, "_");
    const sectionLink = "<a href=\"" + "#" + sectionName + "\"></a>";

    return sectionLink;
  }
  // return empty string if nothing
  return "";
}; //  [ end : createLink ]

//
// #endregion Create Link 

// #region Generate TOC
// create the table of contents dynamically based on user's input

/**
* Generate the Table Of Contents Sections
* @param {} 
* @returns The isEnabled sections of the table of contents
*/
let makeTableOfContents = () =>
{
  let tableOfContents = [];

  for (let section in readmeSections)
  {
    let linkTo = createLink(readmeSections[section].label);
    readmeSections[section].linkToSection = linkTo;

    if (readmeSections[section].isEnabled === true)
    {
      let contentItem = dash + " [" + readmeSections[section].label + "]" + "(" + linkTo + ")" + "\n";

      tableOfContents.push(contentItem);
    }
  }

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
    return "";
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

// #region License
// Gets the components that are associate with the license and rendering that in the README.

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license)
{
  if (license)
  {
    const badgeLink = "![GitHub license](https://img.shields.io/badge/license-" + license + "-blue.svg)";
    return badgeLink;
  }
  // if there is nothing in license then return an empty string
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license)
{
  // This is implemented in the makeTableOfContents() function
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license)
{
  if (license === "None")
  {
    // if the user selects none then disable the section
    readmeSections.license.isEnabled = false;
  }

  if (!license || license !== "None")
  {
    // getting the badge link 
    let badgeLink = renderLicenseBadge(license);
    // const licenseLink = renderLicenseLink(license);
    // only if the license is not None or not empty, then return the user selected.
    const licenseSection = heading2 + " " + readmeSections.license.label
      + "\n"
      + "<!-- License -->"
      + "\n"
      + badgeLink
      + "\n"
      + "\n"
      + license
      + "\n"
      + lineBreak
      ;
    return licenseSection;
  }

  // if there is nothing in license then return an empty string
  return "";
}

//
// #endregion License

module.exports = generateMarkdown;
