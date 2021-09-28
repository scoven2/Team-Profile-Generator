class Staff {
    constructor(name, id, phone, position) {
        this.name = name;
        this.id = id;
        this.phone = phone;
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    getName() {
        return this.name;
    }
    getPhone() {
        return this.phone
    }
    getId() {
        return this.id;
    }
}

module.exports = Staff;