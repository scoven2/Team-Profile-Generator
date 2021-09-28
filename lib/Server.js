const Staff = require('./Staff');

class Server extends Staff {
    constructor(name, id, phone, discord) {
        super(name, id, phone);
        this.discord = discord;
    }
    getPosition() {
        return 'Server';
    }
    getDiscord() {
        return this.discord;
    }
}

module.exports = Server;