const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;

    super("Intern", name, id, email, school);
  }
}