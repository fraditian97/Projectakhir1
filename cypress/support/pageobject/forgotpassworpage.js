
class forgotpasswordpage {
    visit() {
        //Buka halaman Website Login
     cy.visit('/index.php/auth/login');
     }

    clickforgotpassword(){
        cy.get (".orangehrm-login-forgot").click();
    }
    inputUsername (username){
cy.get("input[placeholder='Username']").clear().type(username);
}
    clickresetpassword(){
        cy.intercept("POST", "**/auth/sendPasswordReset").as("resetRequest");
        cy.get("button[type='submit']").click();
        cy.wait(2000);
        cy.url().should("include", "/sendPasswordReset");

    }
}
export default new forgotpasswordpage ()