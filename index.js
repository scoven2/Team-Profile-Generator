const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
const render = require("./lib/htmlGenerator")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
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