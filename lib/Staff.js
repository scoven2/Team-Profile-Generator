//based on unit 10 activity 28
// class Letter {
//     constructor(letter) {
//         let lc = letter.toLowercase();
//         this.letter = lc;
//         let goodChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//         this.visible = (goodChars.indexOf(lc) == -1);
//     }
//     toString() {
//         return this.visible ? this.letter : "_";
//     }
//     guess(letterGuessed) {
//         this.visible = (letterGuessed.toLowercase() === this.letter);
//         return this.visible;
//     }
//     getSolution() {
//         return this.letter;
//     }
// }
// module.exports = Letter;
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