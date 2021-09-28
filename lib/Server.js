const Staff = require('./Staff');

class Server extends Staff {
    constructor(name, id, phone, discord, position) {
        super(name, id, phone);
        this.discord = discord;
        this.position = position;
    }
    getDiscord() {
        return this.discord;
    }
    getPosition() {
        return this.position;
    }
}

module.exports = Server;