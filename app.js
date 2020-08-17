const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {prompt} = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = []

const buildEngineer = employee => {
    prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username'
        },
    ])
    .then (({github})=>{
        employees.push( new Engineer(employee.name, employee.email, employee.id, github))
        subMenu()
    })
    .catch(err => console.log (err))
}

const buildIntern = employee =>{
    prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
        }
    ])
    .then (({school})=>{
        employees.push (new Intern(employee.name, employee.email, employee.id, school))
        subMenu()
    })
    .catch(err => console.log (err))
}

const buildManager = employee =>{
    prompt([
        {
            type: 'input',
            name: 'officenum',
            message: 'What is your Office Number?'
        }
    ])
    .then (({officenum})=>{
        employees.push (new Manager (employee.name, employee.email, employee.id, officenum))
        subMenu()
    })
    .catch(err => console.log(err))
}

const subMenu = () => {
    prompt({
        type: 'list',
        name:'action',
        choices: ['Make Another Employee' , 'Finish' ],
        message: 'What would you like to do?'
    })
    .then(({ action }) => {
        switch (action) {
          case 'Make Another Employee':
            mainMenu()
            break
          case 'Finish':
            const html = render(employees)
            fs.writeFileSync(outputPath, html)
            break
        }
      })
      .catch(err => console.log(err))
}

const mainMenu = () => {
    prompt([
        {
            type: 'list',
            name: 'type',
            choices: ['Engineer', 'Intern', 'Manager'],
            message: 'Select the type of employee'
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter employee email'
        },
        {
            type: 'input',
            name: "id",
            message: "enter employee ID number"
        }
    ])
    .then(employee => {
        switch (employee.type) {
            case 'Engineer':
                buildEngineer(employee)
                break
            case 'Intern':
                buildIntern(employee)
                break
            case 'Manager':
                buildManager(employee)  
        }
    })
    .catch(err => console.log(err))
}

mainMenu()


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
