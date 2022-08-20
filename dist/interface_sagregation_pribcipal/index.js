class OldPriter {
    print() {
        return "Old printer can only print";
    }
}
class ModernPriter {
    constructor() {
        this.scan2 = () => {
            return "ModernPriter can only scan2";
        };
    }
    print() {
        return "ModernPriter can only print";
    }
    photocopy() {
        return "ModernPriter can only photocopy";
    }
    scan() {
        return "ModernPriter can only scan";
    }
}
const oldPrinter = new OldPriter();
console.log(oldPrinter.print());
const modernPriter = new ModernPriter();
console.log(modernPriter.print());
console.log(modernPriter.photocopy());
console.log(modernPriter.scan());
console.log(modernPriter.scan2());
