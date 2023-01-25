const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const pageDisplay = require("./src/pageDisplay");

const employeesArray = [];

function callManagerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
      },    
      {
        type: 'input',
        name: 'id',
        message: 'What is your managers\'s ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your manager\'s email?',
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is your managers\'s office number?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {
    var managerItem = new Manager(
      data.name,
      data.id,
      data.email, 
      data.office);
    employeesArray.push(managerItem)
    
    console.log("array check: ");
    console.log(employeesArray[0].email);
    
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

// begin app
callManagerPrompts();