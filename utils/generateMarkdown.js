// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
