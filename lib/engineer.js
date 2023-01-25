const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super("Engineer", name, id, email, gitHub);

    this.gitHub = gitHub;
  }
}

module.exports = Engineer;