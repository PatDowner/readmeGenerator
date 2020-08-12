const inquirer = require('inquirer')
const fs = require('fs')

const question = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license type.'
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
      },
      {
        type: 'input',
        name: 'testing',
        message: 'What testing was completed for this project?'
      },
      {
        type: 'input',
        name: 'questions',
        message: 'List any questions you want to include in the readme.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }



    ])
}