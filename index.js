const inquirer = require('inquirer');
const fs = require('fs');

const cardsArryay = []
const card = {
  employeeName: "",
  employeeType: "",
  id: "",
  field2: [],
  field3: [],
}


function callManagerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the manager\'s title?',
      },    
      {
        type: 'input',
        name: 'name',
        message: 'What is your managers\'s name?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {    
    console.log(data.title);
    console.log(data.name);
    
    if(data.more == "Engineer"){
      callEngineerPrompts();
    } else if (data.more == "Intern"){
      callInternPrompts();
    }  
  });
}

function callEngineerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the engineer\'s title?',
      },    
      {
        type: 'input',
        name: 'name',
        message: 'What is your engineer\'s name?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {    
    console.log(data.title);
    console.log(data.name);
    
    if(data.more == "Engineer"){
      callEngineerPrompts();
    } else if (data.more == "Intern"){
      callInternPrompts();
    }
    
  });
}

function callInternPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the intern\'s title?',
      },    
      {
        type: 'input',
        name: 'name',
        message: 'What is your intern\'s name?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {    
    console.log(data.title);
    console.log(data.name);
    
    if(data.more == "YES"){
      callPrompts();
    }
    
  });
}



callManagerPrompts();