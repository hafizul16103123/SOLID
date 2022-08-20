/**
 * Interface-Segregation Principle (ISP)
A client should not be forced to implement an interface that it doesn’t use.

এটা খুবই সহজ একটা principle. এর মানে হচ্ছে যে, কোনো class কে এমন কোনো interface ইমপ্লিমেন্ট করতে বাধ্য না করা, যে interface সে ব্যবহার করেনা অথবা যে interface এর মেথডগুলো সে ব্যবহার করেনা।

ISP বলতে চায় যে, আমাদের তৈরিকৃত interface হবে একদম client-specific এবং খুব বেশি generalized না। অর্থাৎ, interface হবে ছোটো এবং client-specific.
 */
interface Print {
    print(): string
}
interface Photocopy {
    photocopy(): string
}
interface Scan {
    scan(): string
    scan2: () => string
}

class OldPriter implements Print {
    print() {
        return "Old printer can only print";
    }
}
class ModernPriter implements Print, Photocopy, Scan {
    print() {
        return "ModernPriter can only print";
    }
    photocopy() {
        return "ModernPriter can only photocopy";
    }
    scan() {
        return "ModernPriter can only scan";
    }
    scan2 = () => {
        return "ModernPriter can only scan2";
    }
}

const oldPrinter = new OldPriter()
console.log(oldPrinter.print())

const modernPriter = new ModernPriter()
console.log(modernPriter.print())
console.log(modernPriter.photocopy())
console.log(modernPriter.scan())
console.log(modernPriter.scan2())
