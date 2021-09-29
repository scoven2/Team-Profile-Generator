//entire project based on unit 10 activities 24, 25, 26, and 28

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
    fs.writeFile('teamProfile.html', html, function(err) {
        if (err) throw err;
        console.log('File created!');
    });
}
run()