const Staff = require('./Staff');

class Host extends Staff {
    constructor(name, id, phone, unavailable, position) {
        super(name, id, phone);
        this.unavailable = unavailable;
        this.position = position;
    }
    getUnavailable() {
        return this.unavailable;
    }
    getPosition() {
        return this.position;
    }
}

module.exports = Host;