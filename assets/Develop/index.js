const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log("Please use the following prompts to generate your README.md file. Simply press 'Enter' to move on to the next question");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a brief description of your project purpose and functionality.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Explain any specific installation instructions required for setting up your project.',
      name: 'installation',
      default: 'List any dependencies or prerequisites that need to be installed.',
    },
    {
      type: 'input',
      message: 'Describe how users can utilize your project or application.',
      name: 'usage',
      default: 'Include usage examples or instructions, if applicable.',
    },
    {
      type: 'input',
      message: 'Outline guidelines and steps for other developers who want to contribute to your project.',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'If you have included tests for your project, provide instructions on how to run them.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter your GitHub username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email address:',
      name: 'email',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Specify the license under which your project is released?',
      choices: [
        "Mozilla Public License 2.0",
        "ISC License",
        "Apache 2.0",
        "MIT License",
      ],
    },
  ])
  .then((answers) => {
    const GMKContent = generateMarkdown.generateMarkdown(answers);

    fs.writeFile('README.md', GMKContent, (err) => 
    err ? console.log('Error Generaring the README.md File',err) : console.log('Successfully Generated README.md file!!')
    );
  });