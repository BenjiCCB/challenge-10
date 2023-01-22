const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the employee\'s title?',
    },    
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee\'s name?',
    },
    {
      type: 'list',
      name: 'more',
      message: 'Would you like to add more employees?',
      choices: ['YES', 'NO']
    }
  ])

  .then((data) => {    
    console.log("hi i'm data")
  });
