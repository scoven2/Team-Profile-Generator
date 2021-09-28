class Staff {
    constructor(name, id, phone) {
        this.name = name;
        this.id = id;
        this.phone = phone;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getPhone() {
        return this.phone
    }
    getPosition() {
        return 'Staff';
    }
}

module.exports = Staff;