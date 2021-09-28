// Dependencies 
const Staff = require("./lib/Staff");
const Supervisor = require("./lib/Supervisor");
const Server = require("./lib/Server");
const Host = require("./lib/Host");
const fs = require("fs");

const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const inquirer = require("inquirer");

const render = require("./lib/htmlRenderer");


//arrays
const teamArray = [];


// Supervisor: 
const supervisorQuestions = [{
        type: 'input',
        name: 'supervisorName',
        message: 'Enter supervisors name.'
    },
    {
        type: 'input',
        name: 'supervisorID',
        message: 'Enter supervisors ID.'
    },
    {
        type: 'input',
        name: 'supervisorPhone',
        message: 'Enter supervisors Phone number.'
    },
    {
        type: 'input',
        name: 'experience',
        message: 'Enter supervisors years experience.'
    },
]

//Server: 
const serverQuestions = [{
        type: 'input',
        name: 'serverName',
        message: 'Enter the servers name.'
    },
    {
        type: 'input',
        name: 'serverID',
        message: 'Enter the servers ID number.'
    },
    {
        type: 'input',
        name: 'serverPhone',
        message: 'Enter the servers phone number.'
    },
    {
        type: 'input',
        name: 'discord',
        message: 'Enter the servers Discord user name.'
    },
]

//Host:
const hostQuestions = [{
        type: 'input',
        name: 'hostName',
        message: 'Enter the hosts name.'
    },
    {
        type: 'input',
        name: 'hostID',
        message: 'Enter the hosts ID number.',
    },
    {
        type: 'input',
        name: 'hostPhone',
        message: 'Enter the hosts phone number.'
    },
    {
        type: 'input',
        name: 'unavailable',
        message: 'What days are the host unavailable to work.',
    },
]

// add another 

const anotherOne = [{
    type: 'list',
    name: 'nextStaff',
    message: 'Enter the next type of staff you wish to add, or choose done to create your team page. ',
    choices: ['Server', 'Host', 'Done']
}]



//starting function with supervisor 
function init() {
    supervisorPromt();
}


// type of staff added
function next() {
    inquirer.prompt(anotherOne).then((response) => {
        console.log(response);
        switch (response.nextStaff) {
            case 'Server':
                serverPromt();
                break;
            case 'Host':
                hostPromt();
                break;
            case 'Done':
                console.log('Creating team!')
                makeTeam();
        }
    })
}
//supervisor
function supervisorPromt() {
    inquirer.prompt(supervisorQuestions).then((response) => {

        let name = response.supervisorName;
        let id = response.supervisorID;
        let phone = response.supervisorPhone;
        let experience = response.experience;
        const supervisor = new Supervisor(name, id, phone, experience);
        teamArray.push(supervisor);
        console.log(teamArray);
        next();
    })
}
//Server
function serverPromt() {
    inquirer.prompt(serverQuestions).then((response) => {
        let name = response.serverName;
        let id = response.serverID;
        let phone = response.serverPhone;
        let discord = response.discord;
        const server = new Server(name, id, phone, discord);
        teamArray.push(server);
        console.log(teamArray);
        next();
    })
}

//Function for Host promts
function hostPromt() {
    inquirer.prompt(hostQuestions).then((response) => {
        let name = response.hostName;
        let id = response.hostID;
        let phone = response.hostPhone;
        let unavailable = response.unavailable;
        const host = new Host(name, id, phone, unavailable);
        teamArray.push(host);
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