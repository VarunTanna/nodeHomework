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
  return `# ${data.title}

 


  ##[Description]
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  // 3. [License](#license)
  3. [Contributors](#contributing)
  4. [Test Instructions](#test)
  5. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  // ## License?
  // ${data.license}

  ## Contributing
  ${data.contributing}

  ## test
  ${data.test}

  ## Questions
    -If you have aby questions about this repo feel free to send me and email.


`;
}



module.exports = generateMarkdown;
