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