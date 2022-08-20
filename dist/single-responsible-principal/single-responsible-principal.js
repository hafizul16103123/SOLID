"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendMessage_1 = require("./sendMessage");
class Authentication {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.name = name;
        this.email = email;
    }
    register() {
        console.log(`${this.name} is registered with email ${this.email}`);
    }
}
const auth = new Authentication("Piyash", "piyash@gmail.com");
auth.register();
sendMessage_1.SendMessage.sensMessage();
