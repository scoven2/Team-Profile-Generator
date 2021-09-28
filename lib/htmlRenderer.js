const path = require("path");
const fs = require("fs");

const templateDirectory = path.resolve(__dirname, "../templates");

const render = staffs => {
    const html = [];

    html.push(staffs
        .filter(staff => staff.getPosition() === "Supervisor")
        .map(supervisor => renderSupervisor(supervisor))
    );
    html.push(staffs
        .filter(staff => staff.getPosition() === "Server")
        .map(server => renderServer(server))
    );
    html.push(staffs
        .filter(staff => staff.getPosition() === "Host")
        .map(host => renderHost(host))
    );

    return renderMain(html.join(""));

};

const renderSupervisor = supervisor => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "supervisor.html"), "utf8");
    template = replacePlaceholders(template, "name", supervisor.getName());
    template = replacePlaceholders(template, "position", supervisor.getPosition());
    template = replacePlaceholders(template, "phone", supervisor.getPhone());
    template = replacePlaceholders(template, "id", supervisor.getId());
    template = replacePlaceholders(template, "yearsExperience", supervisor.getYearsExperience());
    return template;
};

const renderServer = server => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "server.html"), "utf8");
    template = replacePlaceholders(template, "name", server.getName());
    template = replacePlaceholders(template, "position", server.getPosition());
    template = replacePlaceholders(template, "phone", server.getPhone());
    template = replacePlaceholders(template, "id", server.getId());
    template = replacePlaceholders(template, "discord", server.getDiscord());
    return template;
};

const renderHost = host => {
    let template = fs.readFileSync(path.resolve(templateDirectory, "host.html"), "utf8");
    template = replacePlaceholders(template, "name", host.getName());
    template = replacePlaceholders(template, "position", host.getPosition());
    template = replacePlaceholders(template, "phone", host.getPhone());
    template = replacePlaceholders(template, "id", host.getId());
    template = replacePlaceholders(template, "unavailable", host.getUnavailable());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templateDirectory, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;