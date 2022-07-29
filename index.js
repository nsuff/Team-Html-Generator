// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");



console.log("is this working so far?")

const myteam = [];


const createmanager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Who is the team's manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officenumber",
            message: "What is the manager's office number?"
        }
    ])
    .then(managerdata => {
        let {name, id, email, officenumber} = managerdata;
        var newmanager = new manager (name, id, email, officenumber)
        myteam.push(newmanager);
        //console.log(managerdata);
    })
}


const createemployee = () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Is the employee an engineer or intern?",
            choices: ["Engineer","Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "What is the employee's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: "confirm",
            name: "add",
            message: "Add another employee?",
            default: false
        }
    ])

    .then(employeedata => {
        let {role, name, id, email, github, school, add} = employeedata;
        //let newemployee = new empl (name, id, email, officenumber)
        //myteam.push(newmanager);
        //console.log(employeedata);

        var newemployee;
        if (role === "Engineer") {
            newemployee = new engineer (name, id, email, github)
        } else if (role === "Intern") {
            newemployee = new intern (name, id, email, school)
        };

        myteam.push(newemployee);

        if (add){
            return createemployee();
        } else {console.log(myteam)
            writeToFile(fileName,myteam);
        
        };
    });
};



var fileName;
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err => {
        if (err) {return console.log("Something did not work")}
    });
};


function init() {
    fileName = "./dist/index.html";
    createmanager().then(createemployee);
};




// Function call to initialize app
init();