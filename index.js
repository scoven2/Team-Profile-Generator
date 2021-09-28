const inquirer = require("inquirer");
const Server = require("./Lib/Server");
const Staff = require("./Lib/Staff");
const Supervisor = require("./Lib/Supervisor");
const Host = require("./Lib/Host");
const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "Enter name",
        name: "name"
    }, {
        type: "list",
        message: "Enter Position",
        choices: ["Supervisor", "Server", "Host"],
        name: "position"
    }, {
        type: "input",
        message: "Enter ID",
        name: "id"
    }, {
        type: "input",
        message: "Enter phone number",
        name: "phone"
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerServer() {
    const promptArray = [{
        type: "input",
        message: "What is your Discord?",
        name: "discord"
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerHost() {
    const promptArray = [{
        type: "input",
        message: "Enter days unavailable to work",
        name: "unavailable"
    }];
    return inquirer
        .prompt(promptArray);
}

function runInquirerSupervisor() {
    const promptArray = [{
        type: "input",
        message: "What is your years of experience?",
        name: "yearsExperience"
    }];
    return inquirer
        .prompt(promptArray);
}

async function run() {
    let staffArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function({ name, id, phone, position }) {
                    if (position === "Supervisor") {
                        runInquirerSupervisor().then(function({ yearsExperience }) {
                            this.staff = new Supervisor(name, id, phone, yearsExperience, position);
                            console.log(yearsExperience);
                            staffArray.push(staff);
                            resolve("done");
                        });
                    } else if (position === "Server") {
                        runInquirerServer().then(function({ discord }) {
                            this.staff = new Server(name, id, phone, discord, position);
                            console.log(discord);
                            staffArray.push(staff);
                            resolve("done");
                        });
                    } else if (position === "Host") {
                        runInquirerHost().then(function({ unavailable }) {
                            this.staff = new Host(name, id, phone, unavailable, position);
                            console.log(unavailable);
                            staffArray.push(staff);
                            resolve("done");
                        });
                    }
                }).catch(function(err) {
                    console.log("Error");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    function displayPosition(staff) {
        if (staff.position === "Supervisor") {
            console.log(staff.yearsExperience);
            return `years of experience: ${staff.yearsExperience}`;
        }
        if (staff.position === "Host") {
            return `Unavailable: ${staff.unavailable}`;
        }
        if (staff.position === "Server") {
            return `Discord: ${staff.discord}`;
        }
    }

    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {
            console.log(staffArray[j])
            html += `<div>
            <div class="col card-header">
                <h4>${staffArray[j].name}</h4>
            </div>
            <div class="col card-header">
                <h4>${staffArray[j].position}</h4>
            </div>
            <ul>
                <li>Phone: ${staffArray[j].phone}</li>
                <li>ID: ${staffArray[j].id}</li>
                <li> ${displayPosition(staffArray[j])}</li>
            </ul>
            </div> `;
        }
        return html;
    }

    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <position>Document</position>
        </head>
        <body>
            <h1>My Team</h1>
                <div class="row">
                    ${getCardHtml()}
                </div>
        </body>       
        </html>
        `;
    console.log(html);
    const fs = require("fs");
    fs.writeFile('newFile.html', html, function(err) {
        if (err) throw err;
        console.log('File created!');
    });
}
run()

// // Dependencies 
// const Staff = require("./lib/Staff");
// const Supervisor = require("./lib/Supervisor");
// const Server = require("./lib/Server");
// const Host = require("./lib/Host");
// const fs = require("fs");

// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const inquirer = require("inquirer");

// const render = require("./lib/htmlRenderer");


// //arrays
// const teamArray = [];


// // Supervisor: 
// const supervisorQuestions = [{
//         type: 'input',
//         message: 'Enter supervisors name.',
//         name: 'supervisorName',
//     },
//     {
//         type: 'input',
//         message: 'Enter supervisors ID.',
//         name: 'supervisorID',
//     },
//     {
//         type: 'input',
//         message: 'Enter supervisors Phone number.',
//         name: 'supervisorPhone',

//     },
//     {
//         type: 'input',
//         message: 'Enter supervisors years experience.',
//         name: 'experience',
//     },
// ]

// //Host:
// const hostQuestions = [{
//         type: 'input',
//         message: 'Enter the hosts name.',
//         name: 'hostName',
//     },
//     {
//         type: 'input',
//         message: 'Enter the hosts ID number.',
//         name: 'hostID',
//     },
//     {
//         type: 'input',        
//         message: 'Enter the hosts phone number.',
//         name: 'hostPhone',
//     },
//     {
//         type: 'input',
//         message: 'What days are the host unavailable to work.',
//         name: 'unavailable',
//     },
// ]

// //Server: 
// const serverQuestions = [{
//     type: 'input',
//     message: 'Enter the servers name.',
//     name: 'serverName',
// },
// {
//     type: 'input',
//     message: 'Enter the servers ID number.',
//     name: 'serverID',
// },
// {
//     type: 'input',
//     message: 'Enter the servers phone number.',
//     name: 'serverPhone',
// },
// {
//     type: 'input',
//     message: 'Enter the servers Discord user name.',
//     name: 'discord',
// },
// ]

// // add another 

// const anotherOne = [{
//     type: 'list',
//     message: 'Enter the next type of staff you wish to add, or choose done to create your team page. ',
//     name: 'nextStaff',
//     choices: ['Server', 'Host', 'Done']
// }]



// //starting with supervisor 
// function init() {
//     supervisorPromt();
// }


// // type of staff added
// function next() {
//     inquirer.prompt(anotherOne).then((response) => {
//         console.log(response);
//         switch (response.nextStaff) {
//             case 'Server':
//                 serverPromt();
//                 break;
//             case 'Host':
//                 hostPromt();
//                 break;
//             case 'Done':
//                 console.log('Creating team!')
//                 makeTeam();
//         }
//     })
// }
// //supervisor prompts
// function supervisorPromt() {
//     inquirer.prompt(supervisorQuestions).then((response) => {

//         let name = response.supervisorName;
//         let id = response.supervisorID;
//         let phone = response.supervisorPhone;
//         let experience = response.experience;
//         const supervisor = new Supervisor(name, id, phone, experience);
//         teamArray.push(supervisor);
//         console.log(teamArray);
//         next();
//     })
// }
// //Server prompts
// function serverPromt() {
//     inquirer.prompt(serverQuestions).then((response) => {
//         let name = response.serverName;
//         let id = response.serverID;
//         let phone = response.serverPhone;
//         let discord = response.discord;
//         const server = new Server(name, id, phone, discord);
//         teamArray.push(server);
//         console.log(teamArray);
//         next();
//     })
// }

// //Host promts
// function hostPromt() {
//     inquirer.prompt(hostQuestions).then((response) => {
//         let name = response.hostName;
//         let id = response.hostID;
//         let phone = response.hostPhone;
//         let unavailable = response.unavailable;
//         const host = new Host(name, id, phone, unavailable);
//         teamArray.push(host);
//         console.log(teamArray);
//         next();
//     })
// }

// //make the file 
// function makeTeam() {
//     fs.writeFile(outputPath, render(teamArray), function(err) {
//         if (err) {
//             return console.log(err)
//         }
//     })
// }

// init();