import {SendMessage} from './sendMessage'
class Authentication{

    constructor(private name:string,private email:string){
        this.name = name;
        this.email = email;
    }
    register(){
        console.log(`${this.name} is registered with email ${this.email}`)
    }
}
const auth = new Authentication("Piyash","piyash@gmail.com")
auth.register()
SendMessage.sensMessage();
