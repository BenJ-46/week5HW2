// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name,role,email,id, officenum){
        super(name,role,email,id)
        this.officenum = officenum
    }
    getOfficeNum() {
        return this.officenum
    }
    getType() {
        return 'manager'
    }
}

module.exports = Manager