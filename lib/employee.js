class Employee {
  constructor(type, name, id, email, field3) {
    this.type = type;
    this.name = name;
    this.id = id;
    this.email = email;
    this.field3 = field3;
  }
  
  getName(){
    return this.name
  }

  getId(){
    return this.id
  }

  getEmail(){
    return this.email
  }

  getRole(){
    return "Employee"
  }
  
}

module.exports = Employee;