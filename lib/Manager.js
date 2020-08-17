// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name,email,id, officenum){
        super(name,email,id)
        this.officenum = officenum
    }
    getOfficeNumber() {
        return this.officenum
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager