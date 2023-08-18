// retrieve html elements
const form2 = document.querySelector('form');
const nameInput2 =document.querySelector("#ticket-form-name-1");
const emailInput2 = document.querySelector("#ticket-form-email-1");
const passwordInput2 =document.querySelector("#ticket-form-password-1");
const errorMessageName2 = document.querySelector('#error-message-name-1');
const errorMessageEmail2 = document.querySelector('#error-message-email-1');
const errorMessagePassword2= document.querySelector('#error-message-password-1');
const successMessage2 =document.querySelector("#success-message-1");
const successMessage3 =document.querySelector("#success-message-2");
const submit2 =document.querySelector('#submit-Button');




//function to authenticate users
const authenticate= (object,inputUsername,inputEmail, inputPassword) => {
    return object.username === inputUsername && object.email=== inputEmail && object.password === inputPassword;
  }


form2.addEventListener('submit', e =>{
    // prevent form from being submitted

    e.preventDefault();

    const username=  nameInput2.value.trim();
    const email =  emailInput2.value.trim();
    const password=  passwordInput2.value.trim();

    // Retrieve the stored user object from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
 
    // Authenticate the user
    if (storedUser && authenticate(storedUser,username,email, password)) {
        successMessage2.textContent ="Authentication successful!";
        form2.dataset.authenticationValid = "true";
        let logStatus = {logstatus:"loggedin"}
        
        localStorage.setItem("logStatus", JSON.stringify(logStatus));
        form2.submit();
       
        if("redirect" in localStorage){
            window.location.href = "ticket.html";
          }
          else{
        window.location.href = "ticketpage.html";
          }
    }else {
        successMessage2.textContent ="Invalid username or password!";
    }
  

   
})
