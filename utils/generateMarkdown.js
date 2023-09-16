// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) { }

// Markdown Elements
// Heading 
const mdH1 = "#";
const mdH2 = "##";
const mdH3 = "###";
const mdH4 = "####";
// List
const dash = "-";


/**
 * Markdown Elements showing how each part is expected to be used
 * @property {"toc"}             - Table of Contents
 * @property {"gettingStarted"}  - How to get started with the application
 * @property {"about"}           - About the application
 * @property {"builtWith"}       - What the application is built with
 * @property {"prereq"}          - What is needed to run the application
 * @property {"install"}         - How to install the application
 * @property {"config"}          - Notes about what may be configured
 * @property {"usage"}           - How to use the application
 * @property {"running"}         - How to run the application
 * @property {"testing"}         - How to test the various parts of the application
 * @property {"contrib"}         - How to contribute to the application
 * @property {"questions"}       - How one may contact the author for questions
 * @property {"author"}          - Who wrote the application
 * @property {"acknowledgement"} - Notes about who may have helped along the way
 * @property {"note"}            - Notes from the author
 * @property {"license"}         - License Used
 */
const mdLabels = {
  "toc": "Table Of Contents",
  "gettingStarted": "Getting Started",
  "about": "About The Project",
  "builtWith": "Build With",
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
function generateMarkdown (data)
{
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
