const Staff = require('./Staff');

class Supervisor extends Staff {
    constructor(name, id, phone, experience) {
        super(name, id, phone);
        this.yearsExperience = experience;
    }
    getPosition() {
        return 'Supervisor';
    }
    getYearsExperience() {
        return this.yearsExperience;
    }
}

module.exports = Supervisor;