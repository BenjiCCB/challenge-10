const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    this.office = office;

    super("Intern", name, id, email, office);
  }
}