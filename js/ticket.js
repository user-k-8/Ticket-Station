const form3 = document.querySelector('form');

let eventDetails = window.parent.document.querySelector('#event-details');

//retrieve  selected event 
const storedObject = JSON.parse(localStorage.getItem("a"));


const eventHTML =`
    <div class="modal-body">
                                    <h6 class=" text-white text-center"> 🎵 ${storedObject.name}🎵</h6>
                                      <p class="text-white  text-center">Date: 📅 ${storedObject.date} </p>
                                      <p class="text-white  text-center">Time: 🕒 15:00 - 23:00</p>
                                      <p class="text-white  text-center">Price: 💲 R  ${storedObject.price}</p>
                            
                                    </div>
    
    `
//add event html to webpage
  eventDetails.innerHTML +=eventHTML;

let ticketQuantity = document.querySelector('#ticket-form-number');


//retrieve number of tickets
ticketQuantity.addEventListener('input',
() =>{
 //calculate total price, add value to object in localStorage
  let quantityValue =ticketQuantity.value;
  let totalContainer = document.querySelector('#total-price');
  let totalPrice = quantityValue*storedObject.price;
  storedObject.totalPrice =totalPrice;
  storedObject.ticketQuantity =quantityValue;
  let b= storedObject;
  localStorage.setItem("b", JSON.stringify(storedObject));
  
  //output ticket price to webpage
  const priceHTML =`
  <h6 class=" text-white text-center"> Total: R ${totalPrice} </h6>
  `
  totalContainer.innerHTML = priceHTML;

})

//submit ticket form
form3.addEventListener('submit', e =>{

  e.preventDefault();

 if(true){
   
    window.location.href = "confirmation.html";
 }
 else{
  console.log("something's missing")
 }
  
})








