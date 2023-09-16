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
//
const lb = "---";

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
function generateMarkdown (data)
{
  return `
  ${mdH1} ${data.title}
  ${mdLabels.description}
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
  ${data.dependencies}
  ${lb}

  ${mdH3} ${mdLabels.install}
  ${data.install}
  ${lb}

  ${mdH2} ${mdLabels.usage}
  <!-- Usage -->
  ${lb}

  ${mdH3} ${mdLabels.config}
  <!-- Configurables -->
  ${lb}

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
  ${data.author_email}
  ${data.author_contact}
  ${lb}

  ${mdH2} ${mdLabels.acknowledgement}
  <!-- Acknowledgments -->
  ${lb}

  ${mdH2} ${mdLabels.note}
  <!-- Final Note -->
  ${lb}

  ${mdH2} ${mdLabels.license}
  ${data.license}
  ${lb}

`;
}

module.exports = generateMarkdown;
