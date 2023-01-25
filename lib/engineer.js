const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    this.gitHub = gitHub;

    super("Engineer", name, id, email, gitHub);
  }
}
