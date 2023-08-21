function logOut(){
    localStorage.removeItem('logStatus');
    window.location.href = "ticketpage.html";
  }

let logInButtons =document.querySelectorAll('.login');
if("logStatus" in localStorage){
    logInButtons.forEach((button)=>{
    button.style.backgroundColor="#EE5007";
    button.textContent="Signout"
    })
  }
  else{
    logInButtons.forEach((button)=>{
    button.style.backgroundColor=" #c01f27";
    button.textContent="Login";
    })
  }

 logInButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
    console.log('button clicked');
     
    if(button.textContent=="Signout"){
        logOut();
    }
    else{
        window.location.href = "signup.html";
    }
   })
  })

  