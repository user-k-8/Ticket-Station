
let receiptContainer = window.parent.document.querySelector('#receipt');


const storedEventObject = JSON.parse(localStorage.getItem("b"));



    const receiptHTML =`
   
            <div >
            <h6 class=" text-white text-center"> 🎵  ${storedEventObject.name}  🎵</h6>
              <p class="text-white  text-center">Date: 📅  ${storedEventObject.date}</p>
              <p class="text-white  text-center">Time: 🕒 15:00 - 23:00</p>
              <p class="text-white  text-center">Price: 💲 R ${storedEventObject.price}</p>
              <p class="text-white  text-center">Number of tickets:  ${storedEventObject.ticketQuantity}</p>
              <p class="text-white  text-center">Total Price: 💲 R ${storedEventObject.totalPrice}</p>
              <p class="text-white  text-center">Reference Number: RHKDK1298711</p>            
            </div>
            
    `

    receiptContainer.innerHTML += receiptHTML;


















