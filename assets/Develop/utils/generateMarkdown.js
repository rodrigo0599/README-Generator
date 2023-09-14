//  a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
 var badge = '';
 if (license) {
  badge = badges[license];
 }
 return badge;
}
// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = '';
  if (license) {
    link = links[license];
  }
  return link;
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var section = '';
  if (license) {
    section = sections[license];
  }
  return section;
}

// a function to generate markdown for README
function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license)
  var link = renderLicenseLink(data.license)
  var section = renderLicenseSection(data.license)
  return `
  # ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please feel free to contact me:
  - Email: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})
  
## License
  ${badge}
  This project is licensed under the terms of the [${data.license}](${link})

  ${section}`;
}

const badges = {
  'Mozilla Public License 2.0':'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'ISC License':'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  'Apache License 2.0':'[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
}

const links = {
  'Mozilla Public License 2.0':'https://www.mozilla.org/en-US/MPL/2.0/',
  'ISC License':'https://opensource.org/licenses/ISC',
  'Apache License 2.0': 'https://opensource.org/license/apache-2-0/',
  'MIT License':'https://opensource.org/licenses/MIT',
}

const sections = {
  'Mozilla Public License 2.0':"The MPL-2.0 is a balanced license with some copyleft aspects. It permits code modification and distribution under the same MPL-2.0 license, aligning open source principles with commercial software development needs.",
  'ISC License':"The ISC License is a straightforward permissive license, enabling code usage, modification, and distribution with minimal obligations. It closely resembles the MIT License, with some slight wording differences.",
  'Apache License 2.0':'The Apache 2.0 License, which governs this code, is an open-source license that gives you the freedom to use, modify, and share the code under certain conditions. Additionally, it provides contributors with patent rights protection, reducing the risk of patent disputes.',
  'MIT License':"This code's MIT License allows you to freely use, modify, and share it for any purpose. Please include the original license and copyright notices when sharing.",
}
module.exports = {
  generateMarkdown
};
