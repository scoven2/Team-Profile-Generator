const Staff = require('./Staff');

class Host extends Staff {
    constructor(name, id, phone, unavailable) {
        super(name, id, phone);
        this.unavailable = unavailable;
    }
    getPosition() {
        return 'Host';
    }
    getUnavailable() {
        return this.unavailable;
    }
}

module.exports = Host;