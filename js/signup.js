// retrieve html elements
const form = document.querySelector('form');
const nameInput =document.querySelector("#ticket-form-name");
const emailInput = document.querySelector("#ticket-form-email");
const passwordInput =document.querySelector("#ticket-form-password");
const confirmPasswordInput =document.querySelector("#ticket-form-confirm-password");
const errorMessageName = document.querySelector('#error-message-name');
const errorMessageEmail= document.querySelector('#error-message-email');
const errorMessagePassword= document.querySelector('#error-message-password');
const errorMessageConfirmPassword= document.querySelector('#error-message-confirm-password');
const successMessage =document.querySelector("#success-message");
const submit =document.querySelector('#submit-button');


class User {
    constructor(username,email, password) {
      this.username = username;
      this.password = password;
      this.email = email;
    }
  }

// real time input validation
nameInput.addEventListener('input',
()=>{
   
    const nameValue =  nameInput.value.trim();
    const namePatttern = /^[A-Za-z]+$/; 
    form.dataset.nameIsValid = "";

    if(nameValue.match(namePatttern)  && nameValue.length>0){
        errorMessageName.textContent ="✔";
        form.dataset.nameIsValid= "true";    
    }
    else{
        errorMessageName.textContent = "Please enter a name containing only alphabetical characters";
    }
})

emailInput.addEventListener('input',
()=>{
    
    const emailValue =  emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.dataset.emailIsValid = "";

    if(emailValue.match(emailPattern)  &&emailValue.length>0){
        errorMessageEmail.textContent = "✔";
        form.dataset.emailIsValid = "true";    
    }
    else{
        errorMessageEmail.textContent = "Please enter a valid email address";
    }
})

passwordInput.addEventListener('input',
  ()=>{
    
    const passwordValue =  passwordInput.value.trim();
  
    
    if( passwordValue.length >5){
        errorMessagePassword.textContent =  "✔";
    }
    else{
          errorMessagePassword.textContent = "Please enter a password containing at least 6 characters";
      }

})

confirmPasswordInput.addEventListener('input',
  ()=>{

    const passwordValue =  passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    form.dataset.passwordIsValid = "";

        if(confirmPasswordValue.match(passwordValue)){
            errorMessageConfirmPassword.textContent = "✔";
            form.dataset.passwordIsValid ="true";

        }else{
            errorMessageConfirmPassword.textContent = "The passwords do not match";
        } 
      

})


form.addEventListener('submit', e =>{
    // prevent form from being submitted
    e.preventDefault();


    // Get values from the sign-up form input fields
  const username = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Create a new user object
  const newUser = new User(username, email,password);

  // Storing the newUser object in localStorage
  localStorage.setItem("user", JSON.stringify(newUser));

  console.log("Sign up successful!");
    // input is valid, submit form

    if(form.dataset.nameIsValid==="true" && form.dataset.emailIsValid==="true" && form.dataset.passwordIsValid=== "true"){
      successMessage.textContent = "Form successfully completed!"
       form.submit();
      window.location.href = "login.html"
    }else{
        successMessage.textContent = "Form not successfully completed!"
    }

    

})
