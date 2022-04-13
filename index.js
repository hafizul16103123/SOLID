class Store{
    constructor(paymentProsessor){
        this.paymentProsessor = paymentProsessor;
    }
    purchaseBike(quantity){
        this.paymentProsessor.pay(500 * quantity)
    }
    purchaseHelmet(quantity){
        this.paymentProsessor.pay(200 * quantity)
    }
}

// payment Prosessors
class StripePaymentProcessor{
    constructor(user){
        this.stripe = new Stripe(user)
    }
    pay(amount){
    console.log({1:this.user})
        this.stripe.makePayment(amount)
    }
}
class PaypalPaymentProcessor{
    constructor(user){
        this.user = user
        this.paypal = new Paypal()
    }
    pay(amount){
        this.paypal.makePayment(this.user,amount/85)
    }
}
class BkashPaymentProcessor{
    constructor(user,paymentAddress){
        this.bkash = new Bkash(user,paymentAddress)
    }
    pay(amount){
        this.bkash.makePayment(amount)
    }
}
class NagodPaymentProcessor{
    constructor(user,paymentAddress){
        this.user= user
        this.paymentAddress= paymentAddress
        this.nagad = new Nagad()
    }
    pay(amount){
        this.nagad.makePayment(this.user,this.paymentAddress,amount)
    }
    
}

// payment APIs

class Paypal{
    makePayment(user,amount){
        console.log(`Paypal payment for user ${user} is ${amount}`)
    }
}

class Stripe{
    constructor(user){
        this.user = user;
    }
    makePayment(amount){
        console.log(`Stripe payment for user ${this.user} is ${amount}`)
    }
}

class Bkash{
    constructor(user,paymentAddress){
        this.user = user;
        this.paymentAddress = paymentAddress;
    }
    makePayment(amount){
        console.log(`Bkash payment for user ${this.user} is ${amount} and payment address is ${this.paymentAddress}`)
    }
}
class Nagad{
    makePayment(user,paymentAddress,amount){
        console.log(`Nagad payment for user ${user} is ${amount} and payment address is ${paymentAddress}`)
    }
}

// create store
 const store = new Store(new NagodPaymentProcessor('Piyash',"Dhaka"));
 store.purchaseBike(2)
 store.purchaseHelmet(2)