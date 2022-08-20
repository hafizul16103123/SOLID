/**
 * Dependency Inversion Principle (DIP)
High level modules should not depend on low-level modules, both should depend on abstractions.

Abstract should not depend on details. Details should depend on abstractions.

এখানে কিছু টার্মস বুঝার চেষ্টা করিঃ

Dependency: Class A যদি class B এর উপর বা কোনো ভ্যালুর উপর নির্ভর করে তবে class B অথবা ওই ভ্যালুই হলো class A এর ডিপেন্ডেন্সি।

High-level code, Low-level code: High-level code হচ্ছে সেসব যেগুলো আমরা সরাসরি কল করি এবং যেগুলো core business logic ধারণ করে। আর এসব High-level code কে যেসব code সাহায্য করে সেগুলো Low-level code।

Abstraction: Abstraction হলো কোনো concrete class অথবা method এর indirect representation. Abstraction বলতে সাধারণত Abstraction class এবং interface কে বুঝায়।
 */
interface Authentication{
    authenticate():string
}
class GoogleAuthentication implements Authentication{
    authenticate(): string {
        return 'logged in with google'
    }

}
class GithubAuthentication implements Authentication{
    authenticate(): string {
        return 'logged in with github'
    }

}
// High-level code ,thos
class UserLogin{
    login(email:string,authenticationService:Authentication){
        const authResult = authenticationService.authenticate()
        if(authResult!=null){
            return authResult +" "+ email
        }
    }
}

const userLogin = new UserLogin()
console.log(userLogin.login('p@gmail.com',new GithubAuthentication()))