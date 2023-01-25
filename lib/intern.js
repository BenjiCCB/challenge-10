const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super("Intern", name, id, email, school);

    this.school = school;
  }

  getSchool(){
    return this.gitHub;
  }

  getRole(){
    return "Engineer"
  }

}

module.exports = Intern;