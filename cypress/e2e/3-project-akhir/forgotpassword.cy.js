import forgotpassworpage from "../../support/pageobject/forgotpassworpage";

describe("forgot password test", ()=>{
    it("should send password reset", ()=>{
         forgotpassworpage.visit();
         forgotpassworpage.clickforgotpassword();
         forgotpassworpage.inputUsername("admin123");
         forgotpassworpage.clickresetpassword();

    });
});


