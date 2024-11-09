// Function to return a license badge based on the license passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can contact me at [${data.email}](mailto:${data.email}).
`;
}

export default generateMarkdown;

