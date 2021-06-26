// Dependencies 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");


//arrays or questions
const teamArray = [];


// Manager: 
const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number?'
    },
]

//Engineer: 
const engineerQuestions = [{
        type: 'input',
        name: 'engiName',
        message: 'What is the engineers name?'
    },
    {
        type: 'input',
        name: 'engiID',
        message: 'What is the engineers ID number?'
    },
    {
        type: 'input',
        name: 'engiEmail',
        message: 'What is the engineers email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub user name?'
    },
]

//Intern:
const internQuestions = [{
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is the interns ID number?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
    },
]

// add another employee

const anotherOne = [{
    type: 'list',
    name: 'nextEmployee',
    message: 'What type of employee would you like to enter next? If you are done select "Done" to generate your teams page.',
    choices: ['Engineer', 'Intern', 'Done']
}]



//starting function with manager 
function init() {
    managerPromt();
}


// type of employee added
function next() {
    inquirer.prompt(anotherOne).then((response) => {
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Creating your team!')
                makeTeam();
        }
    })
}
//manager
function managerPromt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        const manager = new Manager(name, id, email, office);
        teamArray.push(manager);
        console.log(teamArray);
        next();
    })
}
//Engineer
function engineerPromt() {
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.engiName;
        let id = response.engiID;
        let email = response.engiEmail;
        let github = response.github;
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        console.log(teamArray);
        next();
    })
}

//Function for Intern promts
function internPromt() {
    inquirer.prompt(internQuestions).then((response) => {
        let name = response.internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.school;
        const intern = new Intern(name, id, email, school);
        teamArray.push(intern);
        console.log(teamArray);
        next();
    })
}

//make the file 
function makeTeam() {
    fs.writeFile(outputPath, render(teamArray), function(err) {
        if (err) {
            return console.log(err)
        }
    })
}

init();