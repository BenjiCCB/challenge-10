const inquirer = require('inquirer');
const fs = require('fs');


function callPrompts(){
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
    if(data.more == "YES"){
      callPrompts();
    }
    // switch() {
    // case  "what is the employees name"
    //    addemployee()
    // break 
    // }
    
  });

}

callPrompts();