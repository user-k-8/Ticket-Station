const storedEvent = JSON.parse(localStorage.getItem('a'));

const eventDetailsHTML= `
<div class="container">
<div class="row">

    <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
        <div class="services-info">
            <h2 class="text-white mb-4">Event details</h2>
            <h4 class="text-white">${storedEvent.name}</h4>
            <p class="text-white">Date: ${storedEvent.date}</p>  
            <p class="text-white">Time: 15:00 - 23:00</p>
             <p class="text-white">Location: ${storedEvent.location}</p>
             <p class="text-white">Artists: ${storedEvent.artists}</p>
             <p class="text-white">Price: ${storedEvent.price}</p>
                <a class="btn custom-btn smoothscroll"  href="ticketpage.html">Back</a>
                <a class="btn custom-btn smoothscroll"  onclick="buy(${storedEvent.id})">Buy ticket</a>
               
            </div>
    </div>
    <div class="col-lg-6 col-12 about-img-container">
        <div class="about-text-wrap" >

            <img src="./${storedEvent.img}"  class="about-image img-fluid" >     

            </div>
        </div>
    </div>
</div>`

let eventDescription = document.getElementById('description');

eventDescription.innerHTML += eventDetailsHTML;
