/**
 * Null Object Pattern handle all null check.we don't need to check manually
 */
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    canAccess() {
        return this.id === 1;
    }
}
class NullUser {
    constructor() {
        this.id = -1;
        this.name = "Guest";
    }
    canAccess() {
        return false;
    }
}
const users = [
    new User(1, "piyash"),
    new User(2, "kazy")
];
const findUser = (id) => {
    const user = users.find(i => i.id === id);
    if (user) {
        return user;
    }
    return new NullUser();
};
const printUser = (id) => {
    const user = findUser(id);
    console.log(`Hello ${user.name}`);
    if (user.canAccess()) {
        console.log("You have access");
    }
    else {
        console.log("You don't have access");
    }
};
printUser(1);
