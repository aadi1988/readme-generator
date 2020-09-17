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
[here](#license)
## License
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=green)]()
## Installation Instructions
${data.installInstr}
`;
}

module.exports = generateMarkdown;
