import menudashboardpage from "../../support/pageobject/menudashboardpage";
import logindata from "../../fixtures/logindata.json";

describe ('menu dashboard',() =>{
it ('tc1-loginValid', () => {
       
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       menudashboardpage.visit();
        // cy.get("input[placeholder='Username']").clear().type('Admin')
       menudashboardpage.inputUsername(logindata.validusername); 
       //cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
       menudashboardpage.Inputpassword (logindata.validpassword);
       //cy.get("button[type='submit']").click()
       menudashboardpage.loginbtn ();
       // cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
        menudashboardpage.clickmenudashboard();
        //cy.url.should("include", "/directory/viewDirectory");
        //cy.contains("Directory").should("exist");
        menudashboardpage.verifydashboardpageloaded();

    });
});