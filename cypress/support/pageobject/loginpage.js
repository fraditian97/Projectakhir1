import logindata from "../../fixtures/logindata.json"; 

class Loginpage {
    visit() {
        //Buka halaman Website Login
     cy.visit('/index.php/auth/login');
     }

    inputUsername (username){
    cy.get("input[placeholder='Username']").clear().type(username);
    }

    Inputpassword (password){
    cy.xpath("//input[@placeholder='Password']").clear().type(password);
    }
    
    loginbtn(){
    cy.intercept("POST", "/web/index.php/api/v2/login").as("loginRequest");
    cy.get("button[type='submit']").click();
    cy.wait(2000);
    cy.url().should("include", "/dashboard");
    }
    
 }

export default new Loginpage ()
