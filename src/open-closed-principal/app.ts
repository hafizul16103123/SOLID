/**
 * In object-oriented programming, the open–closed principle states
 *  "software entities (classes, modules, functions, etc.) should be open for extension,
 *  but closed for modification";[1] that is, such an entity can allow its behaviour to be extended
 *  without modifying its source code.
 */
class PrintName {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    print() {
        console.log(`My name is ${this.name}`)
    }
}

class PrintAge {
    age: number;
    constructor(age: number) {
        this.age = age
    }
    print() {
        console.log(`My age is ${this.age}`)
    }
}
class PrintAddres {
    address: string
    constructor(address: string) {
        this.address = address
    }
    print(address: string) {
        console.log(`Address is ${address}`)
    }
}
//main functionaity
function persionInfoPrint(options: any) {
    for (let item of options) {
        item.print()
    }
}
const options = [
    new PrintName('Piyash'),
    new PrintAge(25),
    new PrintAddres('Dhaka')
]
persionInfoPrint(options)
