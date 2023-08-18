let navExpandButton = document.getElementById('navExpand');
let navItems = document.getElementById('nav-Bar');
let navCollapsed = "false";


navExpandButton.addEventListener('click',  ()=> {
  if (navCollapsed=="true") {
   navItems.style.display="none";
    
    navExpandButton.ariaExpanded= "false";
     navCollapsed = "false";
  } else {  
    navCollapsed = "true";
    navItems.style.display="block";
    navItems.style.width ="100%";
   navItems.style.backgroundColor="#6A040F"
    navExpandButton.ariaExpanded= "true"
    
  }

});
