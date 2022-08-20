class GoogleAuthentication {
    authenticate() {
        return 'logged in with google';
    }
}
class GithubAuthentication {
    authenticate() {
        return 'logged in with github';
    }
}
class UserLogin {
    login(email, authenticationService) {
        const authResult = authenticationService.authenticate();
        if (authResult != null) {
            return authResult + " " + email;
        }
    }
}
const userLogin = new UserLogin();
console.log(userLogin.login('p@gmail.com', new GithubAuthentication()));
