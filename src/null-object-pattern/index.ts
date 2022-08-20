/**
 * Null Object Pattern handle all null check.we don't need to check manually
 */
class User{
    constructor(public id:number,public name:string){
        this.id = id;
        this.name = name;
    }
    canAccess(){
        return this.id===1;
    }
}

class NullUser{
    public id:number
    public name:string

    constructor(){
        this.id = -1;
        this.name = "Guest";
    }
    canAccess(){
        return false;
    }
}

const users = [
    new User(1,"piyash"),
    new User(2,"kazy")
]
const findUser =(id:number)=>{
    const user =  users.find(i=>i.id===id)
    if(user){
        return user
    }
    return new NullUser()
   
}
const printUser =(id:number)=>{
    const user = findUser(id)
     console.log(`Hello ${user.name}`)

    if(user.canAccess()){
        console.log("You have access")
    }else{
        console.log("You don't have access")
    }
}
printUser(1)