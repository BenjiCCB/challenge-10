const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const renderPage = require("./src/renderPage");

const employeesArray = [];

function callManagerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your manager\'s name?',
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
    
    // console.log("array check: ");
    // console.log(employeesArray[0].email);

       
    if(data.more == "Engineer"){
      callEngineerPrompts();
    } else if (data.more == "Intern"){
      callInternPrompts();
    } else{
      writeFile()
    }
  });
}

function callEngineerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
      },    
      {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {    
    var engineerItem = new Engineer(
      data.name,
      data.id,
      data.email, 
      data.github);
    employeesArray.push(engineerItem)
    
    if(data.more == "Engineer"){
      callEngineerPrompts();
    } else if (data.more == "Intern"){
      callInternPrompts();
    } else{
      writeFile()
    }

  });
}

function callInternPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
      },    
      {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?',
      },    
      {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
      },
      {
        type: 'list',
        name: 'more',
        message: 'Would you like to add more employees?',
        choices: ['Engineer', 'Intern', 'Complete team']
      }
    ])

  .then((data) => {    
    var internItem = new Intern(
      data.name,
      data.id,
      data.email, 
      data.school);
    employeesArray.push(internItem)
    
    if(data.more == "Engineer"){
      callEngineerPrompts();
    } else if (data.more == "Intern"){
      callInternPrompts();
    } else{
      writeFile()
    }
    
  });
}

function writeFile(){
  var pageContent = renderPage(employeesArray);
  
  const filename = "output.html";
  fs.writeFile(filename, 
    pageContent,
    (err) => err ? console.log(err) : console.log('Success! View your info in the output.html file')
  );
}

// begin app
callManagerPrompts();