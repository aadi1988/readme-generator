// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.projectTitle}
  [![License](<https://img.shields.io/static/v1?label=License&message=${data.license}&color=green>)]()
## Description
${data.description}
## Table of contents
[Installation](#installation-instructions)  
[License](#license)  
[Usage](#usage)  
[Contribution Guidelines](#contribution-guidelines)  
[Testing Guidelines](#testing-guidelines)  
[Questions](#questions)
## Installation Instructions
${data.installInstr}
## Usage
${data.usage}
## License
This project is covered under ${data.license} license
## Contribution
${data.contribute}
## Testing Guidelines
${data.test}
## Questions
My Github Profile: github.com/${data.gitHubUser}  
For more questions, you can reach me @ ${data.email}
`;
}

module.exports = generateMarkdown;
