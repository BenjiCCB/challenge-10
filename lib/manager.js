const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super("Manager", name, id, email, office);

    this.office = office;
  }

  getRole(){
    return "Manager"
  }

}

module.exports = Manager;