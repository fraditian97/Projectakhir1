import loginpage from "../../support/pageobject/loginpage";
import logindata from "../../fixtures/logindata.json";

describe ('Secanrio Login',() =>{
it ('tc1-loginValid', () => {
       
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.visit();
        // cy.get("input[placeholder='Username']").clear().type('Admin')
       loginpage.inputUsername(logindata.validusername); 
       //cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
       loginpage.Inputpassword (logindata.validpassword);
       //cy.get("button[type='submit']").click()
        loginpage.loginbtn ();

    });
});