// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case "MIT":
      https://img.shields.io/badge/license-MIT-brightgreen
      break;
    case "Apache 2.0":
      https://img.shields.io/badge/license-Apache%202.0-orange
      break;
    case "Creative Commons Zero v1.0 Univresal":
      https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0%20Universal-yellow
      break;
    case "GNU General Public v.2.0":
      https://img.shields.io/badge/license-GNU%20General%20Public%20v.2.0-red
      break;
    case "Mozilla Public 2.0":
      https://img.shields.io/badge/license-Mozilla%20Public%202.0-blue
      break; 
    case "None":
      https://img.shields.io/badge/license-None-lightgrey
      break;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description
    ${data.description}

  
  ## Table of Contents 
    ${data.tableofcontents}
  
-  [Installation](#installation)
-  [Usage](#usage)
-  [Contributing](#contributing)
-  [License](#license)
-  [Questions](#questions)
-  [Tests](#tests)
  
  ## Installation
  
   ${data.installation}
  
  ## Usage
  
   ${data.usage}
  
 
  
  ## Contributing
  
   ${data.contributing}
  
  ## License
  
   ${data.license}
  
    
  
  
  
  
 
  
  ## Questions 
  My github username is ${data.questions}
  
  Click here: https://github.com/${data.questions}

  Contact me further at ${data.contactme}
  
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
