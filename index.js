const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const render = require("./lib/htmlGenerator")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { nextTick } = require("process");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

// arrays of questions
const teamArray = [];

// manager
const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the team manager.'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the managers ID number?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers Email address?'
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the managers office number?'
    },
]

// Engineer
const engineerQuestions = [{
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the name of the team engineer.'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the engineers ID number?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers Email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub username?'
    },
]

// intern
const internQuestions = [{
        type: 'input',
        name: 'internName',
        message: 'Please enter the name of the team intern.'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is the interns ID number?'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the interns Email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is the intern attending? Enter N/A if not currently attending school.'
    },
]

//add employee
const additionalEmployee = [{
    type: 'list',
    name: 'nextEmployee',
    message: 'What type of team member would you like to add next? Select "Done" when you are finished to generate your team page.',
    choices: ['Engineer', 'Intern', 'Done']
}]

//start with manager 
function init() {
    managerPrompt();
}

//what type of employee to add
function next() {
    inquirer.prompt(additionalEmployee).then((response) => {
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Done':
                console.log('Generating your team page.')
                generateTeam();
        }
    })
}

//manager questions
function managerPrompt() {
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

//engineer questions
function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.engineerName;
        let id = response.engineerID;
        let email = response.engineerEmail;
        let github = response.github;
        const engineer = new Engineer(name, id, email, github);
        teamArray.push(engineer);
        console.log(teamArray);
        next();
    })
}

//intern questions
function internPrompt() {
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

function generateTeam() {
    fs.writeFile(distPath, render(teamArray), function(err) {
        if (err) {
            return console.log(err)
        }
    })
}

init();