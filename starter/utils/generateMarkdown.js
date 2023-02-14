// function to generate markdown for README
function generateMarkdown(data) {
  
  return `

  # ${data.title} :clipboard:

  ![${data.license} license](https://img.shields.io/badge/License-${data.license}-blue)

  ![${data.screenshot}](${data.screenshot})

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
  
  Check out my Github [github.com/${data.github}](https://www.github.com/${data.github})

  Feel free to get in touch via email! <a href="mailto:${data.email}">${data.email}</a>;

  ## License

  ![${data.license} license](https://img.shields.io/badge/License-${data.license}-blue)

  Usage and distribution of this application is governed by the ${data.license} license. <https://opensource.org/licenses/${data.license}>
  
  ## Walkthrough video

  ![Walkthrough video](${data.video})

  `;

}

module.exports = generateMarkdown;
