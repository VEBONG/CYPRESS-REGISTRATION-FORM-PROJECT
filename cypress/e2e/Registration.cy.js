/// <reference types = "cypress" />

import RegistrationPage from "../PageObjects/RegistrationPage";


describe('Registration page', () => {

    before(() => {
        // Visit the url and navigate to the form, Perform the account creation before all tests
        cy.visit('https://fs2.formsite.com/meherpavan/form1/index.html', {failOnStatusCode: false});
        const rn = new RegistrationPage();
        rn.LoginButton_click();
        rn.SignupButton_click();
        rn.TypeSignup_email('listacesta@gufum.com');
        rn.TypeSignup_password('Automate_@321');
        rn.ClickCreateAccount_button();
        rn.Click_CreateNewForm_button();
       

      });


    it('Login to fill form after creating an account', () =>
    {
        cy.visit('https://fs2.formsite.com/meherpavan/form1/index.html', {failOnStatusCode: false});
        const ln = new RegistrationPage();
        ln.LoginButton_click();
        ln.TypeLoginUsername('listacesta@gufum.com');
        ln.TypeLoginPassword ('Automate_@321')
        ln.Click_RememberMe_button()
        ln.TestLogin_button()
        ln.Click_CreateNewForm_button()
        ln.ChooseTemplate_button()
        // click the Registration form
        ln.SelectRegistrationTemp_button()
        ln.Click_UseThisTemplate()
        ln.Type_FormName('STP SQA AUTOMATION REGISTRATION FORM 1')
        ln.Click_CreateFormButton()
        ln.Click_ViewFormButton()

            //Fill the form using another method
       // ln.Fill_Form()
        //ln.Fill_NameField('VEBONG')
       // ln.Fill_EmailField('vebong.qa@gmail.com')
       // ln.Fill_PhoneNo('07033447721')
        

                // I stopped here...


    })

    it('Fill form and submit', () => {
        const fm = new RegistrationPage();
        fm.Fill_Form()
        fm.Fill_NameField('EBONG, UKAM KEADE')
        fm.Fill_EmailField('listacesta@gufum.com')
        fm.Fill_PhoneNo('07012881287')
        fm.Select_ContactMethod()
        fm.Select_CheckBoxes()
        fm.SelectTheAll_CheckBox()
        fm.UploadFile()
        fm.SubmitForm()
    })
  

})