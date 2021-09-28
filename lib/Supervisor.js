const Staff = require('./Staff');

class Supervisor extends Staff {
    constructor(name, id, phone, yearsExperience, position) {
        super(name, id, phone);
        this.yearsExperience = yearsExperience;
        this.position = position;
    }
    getYearsExperience() {
        return this.yearsExperience;
    }
    getPosition() {
        return this.position
    }
}

module.exports = Supervisor;