//Q2: Design a class for manager which is employee and can have adepartment property.

class Manager {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
  salary = 0;
  dep = "";
  setSalary = function (sal) {
    this.salary = sal;
    return this.salary;
  };
  setDepartment = function (dep) {
    this.dep = dep;
    return this.dep;
  };

  getDepartment = function () {
    return this.dep;
  };
}

const manager = new Manager(1, "Jack");
console.log(manager.setSalary(1000));
console.log(manager.setDepartment("Development"));
console.log(manager.getDepartment());


class Employee extends Manager{
    constructor(id,name,reportsTo){
        super(id,name);
        this.reportsTo = reportsTo
    }

    getEmp= function (){
        return this
    }
}

let emp = new Employee(1,'name','reportsTo')
emp.setSalary(1000);
emp.setDepartment("Development");
console.log("employee details\n",emp.getEmp())


//Q1: Design the same classes as in previous question but by using only JavaScript prototypes and not class keyword.

