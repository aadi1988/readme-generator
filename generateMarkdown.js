// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  for (let key in data){
        console.log(data[key]);
  }
  
  return `# ${data.projectTitle}
## Description
${data.description}
## Table of contents
[Installation](#installation-instructions)
[License](#license)
[Usage](#usage)
[Contribution Guidelines](#contribution-guidelines)
[Testing Guidelines](#testing-guidelines)
[Questions](#questions)
## License
[![License](<https://img.shields.io/static/v1?label=License&message=${data.license}&color=green>)]()
## Installation Instructions
${data.installInstr}
## Usage
${data.usage}
## Contribution Guidelines
${data.contribute}
## Testing Guidelines
${data.test}
## Questions
${data.gitHubUser}
${data.email}
`;
}

module.exports = generateMarkdown;
