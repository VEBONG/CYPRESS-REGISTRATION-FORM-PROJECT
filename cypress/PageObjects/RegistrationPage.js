// form reggistration page


class RegistrationPage
{
  // xpath of webpage elements

    //url= 'https://fs2.formsite.com/meherpavan/form1/index.html';
    //url = 'https://www.google.com/';
    Login_button = '//*[@id="404-page-body"]/nav[1]/div/a[1]';
    Signup_button = '/html/body/div[1]/div[1]/div/a';
    Signup_email = '//*[@id="UserEmail"]';
    Signup_password = '//*[@id="Password1"]';
    Signup_createAcct_button = '//*[@id="signupForm"]/div[3]/button';
    Signup_CreateNewForm_button = '//*[@id="menu-bubble"]/div/div[2]/button';
    Login_username = '//*[@id="UserId"]';
    Login_password = '//*[@id="Password"]';
    Login_rememberMe = '//*[@id="section-login"]/div[3]/label';
    Login_loginButton = '//*[@id="login"]';        
                          
    CreateNewForm_pageTittle = '//*[@id="wrapper-right"]/header/h2';
    
        //old locator...
        // CreateNewForm_button = '//*[@id="menu-bubble"]/div/div[2]/button';
    CreateNewForm_button = '//*[@id="button-create"]' ;
    
    
      // This locator could not find the element
      // UseTemplate_button = '//*[@id="chooser-template"]';
    UseTemplate_button = '//*[@id="chooser-template"]/div[1]/div[1]';
   
    UseRegnTemplate_button = '//*[@id="template-116"]/div[1]/div';
   // UseRegnTemplate_button = '//*[@id="template-116"]'
    UseRegnApplicationTemplate_button = '//*[@id="template-116"]';
    UseThisTemplate_button = '//*[@id="section-preview-left"]/button';
    //UseThisTemplate_button = '#section-preview-left > .button-primary';
    Form_NameField = '//*[@id="FormName2"]';
    CreateForm_button = '/html/body/div[3]/div[3]/div/button[1]';
      // FormEditor_ViewForm = '//*[@id="FSsubmit"]';
    FormEditor_ViewForm = '//*[@id="menu-top-2"]/button';

      // Form elements locators 
   // NameField = '//*[@id="RESULT_TextField-1"]';
    NameField =  '#RESULT_TextField-1';
    
    EmailAddressField = '//*[@id="RESULT_TextField-2"]';
    PhoneNoField = '//*[@id="RESULT_TextField-3"]';
    SelectPreferred_ContactMethod = '//*[@id="RESULT_RadioButton-4"]';
    CheckBoxes= '//*[@id="q7"]/table';
    CheckBoxes_A = '//*[@id="q7"]';
    CheckBox_Executive = 'tbody > :nth-child(1) > :nth-child(1) > label'; 
    CheckBox_Sales = ':nth-child(1) > :nth-child(2) > label';
    CheckBox_Marketing = ':nth-child(2) > :nth-child(1) > label';
    CheckBox_Technology = ':nth-child(2) > :nth-child(2) > label';
    CheckBox_All2 = '//*[@id="RESULT_CheckBox-5_4"]';
    CheckBox_All =  '//*[@id="q7"]/table/tbody/tr[3]/td';
    CheckBoxFor_All = ':nth-child(3) > td > label';

    FileUpload_Button = '//*[@id="RESULT_FileUpload-6"]';
    SummitForm_Button = '//*[@id="FSsubmit"]';

    
/*
    visit() {
        cy.get(this.url);
      }

*/

    // Click the Login button
LoginButton_click()
{
  cy.xpath(this.Login_button).click();

}

    // Click the Login button
SignupButton_click()
{
  cy.xpath(this.Signup_button).click();

}

    /* This functiion allows the script to type in the value of the email in the test section. See usage:  
    rn.TypeSignup_email('lustukelte@gufum.com');
    */
TypeSignup_email (Email)
{
  cy.xpath(this.Signup_email).type(Email)
}

TypeSignup_password(password)
{
  cy.xpath(this.Signup_password).type(password)
}

// This code clicks the button to create an account
ClickCreateAccount_button()
{
  cy.xpath(this.Signup_createAcct_button).click()
}

Click_CreateNewForm_button()
{
  cy.xpath(this.Signup_CreateNewForm_button).click()
}

TypeLoginUsername (username)
{
  cy.xpath(this.Login_username).type(username)
}

TypeLoginPassword (password)
{
  cy.xpath(this.Login_password).type(password)
}

Click_RememberMe_button ()
{
  cy.xpath(this.Login_rememberMe).click()
}

TestLogin_button ()
{
cy.xpath(this.Login_loginButton).click()
}

ClickCreateNewForm_button ()
{
  cy.xpath(this.CreateNewForm_button).click()
}

ChooseTemplate_button()
{
  cy.xpath(this.UseTemplate_button)
  .should('contain', 'Use a template').click()
}

SelectRegistrationTemp_button()
{
  cy.xpath(this.UseRegnTemplate_button)
  .should('contain', 'Application Form').click()
}

Click_UseThisTemplate ()
{
  cy.xpath(this.UseThisTemplate_button).click()
}

Type_FormName (formName)
{
  cy.xpath(this.Form_NameField)
  .should('exist')
  .and('be.visible')
  .type(formName)
}

Click_CreateFormButton()
{
  cy.xpath(this.CreateForm_button).click()
}

  // THIS METHOD OPENS A NEW TAB HENCE, CAN'T FILL THE FORM, SO WE HAVE TO TRY ANOTHER APPROACH
Click_ViewFormButton()
{
  cy.xpath(this.FormEditor_ViewForm).click()
  //cy.url().should('eq', 'https://fs21.formsite.com/eAmTEi/wbny6vx1sm/index')
 // .and('contain.text', 'index')
 //.invoke('removeAttr', 'onclick').click() IS NOT WORKING
 cy.wait(5000)
}


Fill_Form()
{
  cy.visit('https://fs21.formsite.com/eAmTEi/wbny6vx1sm/index') 
  
  
}


Fill_NameField(Name)
{
  cy.get(this.NameField)
  .should('exist')
  .type(Name)
}

Fill_EmailField (Email)
{
  cy.xpath(this.EmailAddressField)
  .should('exist')
  .type(Email)
}

Fill_PhoneNo (Phone)
{
  cy.xpath(this.PhoneNoField)
  .should('exist')
  .type(Phone)
}

Select_ContactMethod ()
{
  cy.xpath(this.SelectPreferred_ContactMethod)
  .should('exist')
  .select('Phone')
}

Select_CheckBoxes ()
{
  //cy.xpath(this.CheckBox_Executive).check()
 // cy.xpath(this.CheckBoxes).check(['Executive', 'Sales', 'Marketing', 'Technology', 'All'])
  //cy.xpath(this.CheckBox_All).click() 
  // THE ABOVE LINES OF CODES DID NOT CHECK THE BOXES BECAUSE THE BOXES ARE IN A TABLE & NOT CHECKBOXES
  cy.get(this.CheckBox_Executive).click()
  cy.get(this.CheckBox_Technology).click()
  cy.get(this.CheckBox_Sales).click()
  cy.get(this.CheckBox_Marketing).click()
    // Let us click or check the 'All' box in a different method, so I will comment on this below code
  //cy.get(this.CheckBoxFor_All).click()

}

SelectTheAll_CheckBox ()
{
  cy.get(this.CheckBoxFor_All).click()
}

UploadFile ()
{
  // Install cypress file upload plugin with 'npm install –dev cypress-file-upload' and add import 'cypress-file-upload'; to command.js
  cy.xpath(this.FileUpload_Button).click()
  //.attachFile("Upload_CV.pdf",{timeout:10000} )

  // To upload the other file in the fixture folder, uncomment the below line and comment the above line and vice versa
  .attachFile("Candidate_picture.png",{timeout:10000} )
  
}


SubmitForm ()
{
  cy.wait(20000)
  cy.xpath(this.SummitForm_Button).click()
  cy.url()
  .should('include', 'showSuccessPage?')
  cy.title()
  .should('include', 'Thank you!')
}



}

export default RegistrationPage;