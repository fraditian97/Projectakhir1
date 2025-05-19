import loginpage from "./loginpage";

class menudashboard {
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
    
    clickmenudashboard(){
        cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
    }

    verifydashboardpageloaded(){
        cy.url().should("include", "/directory/viewDirectory");
        cy.contains("Directory").should("exist");

    }
 }

export default new menudashboard ()
