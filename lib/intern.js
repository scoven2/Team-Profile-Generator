const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Engineer';
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Employee;