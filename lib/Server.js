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