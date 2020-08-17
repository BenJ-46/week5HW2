// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,role, email, id){
        this.name = name
        thhis.role = role
        this.emai = email
        this.id = id
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    getID() {
        return this.id
    }
}
module.exports = Employee