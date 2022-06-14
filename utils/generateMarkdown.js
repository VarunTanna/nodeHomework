// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === "Apache") {
  //   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue)](https://opensource.org/licenses/Apache-2.0)"
  // }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   <img src="https://img.shields.io/badge/license-${data.license}-goldenrod" alt="badge-${data.license}" /> \n
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributors](#contributing)
  6. [Test Instructions](#test) 
  7. [Questions](#questions)

  ## Description
  ${data.description}


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  

  ## Contributing
  ${data.contributing}

  ## test
  ${data.test}

  ## Questions
  Contact me:
  - [At GitHub/${data.username}](https://github.com/${data.username})
  - [Email Me](mailto:${data.email})


`;
}



module.exports = generateMarkdown;
