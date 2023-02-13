// function to generate markdown for README
function generateMarkdown(data) {
  
  return `

  # ${data.title} :clipboard:

  https://img.shields.io/badge/MIT-license-blue

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

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
  
  ## Tests

  ${data.tests}
     
  ## Questions

  Feel free to get in touch! <a href="mailto:${data.questions}">${data.questions}</a>;
  
  `;

}

module.exports = generateMarkdown;
