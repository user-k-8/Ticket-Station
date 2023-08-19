

let searchFilter = document.getElementById('search-filter');
let dateFilter = document.getElementById('date-filter');
let eventListFilter = document.getElementById('event-list-filter');
let locationFilter = document.getElementById('location-filter');
let mainFilter=document.getElementById('main-filter');
let searchHeading = document.getElementById('search-result-heading');
let allEvents = document.getElementById('all-events');

mainFilter.addEventListener('change', ()=> {

  searchResults.innerHTML ="";
  searchHeading.style.display="none";
  searchContainer.style.height ="max-content";
  dateFilter.style.display= "none";
  locationFilter.style.display= "none";
  eventListFilter.style.display= "none";
  searchFilter.style.display= "none";
  const selectedFilter = mainFilter.value;

  if(selectedFilter=="Date"){
    dateFilter.style.display= "block";

  }
  else if(selectedFilter=="Location"){
    locationFilter.style.display= "block";
  }
  else if(selectedFilter=="EventList"){
    eventListFilter.style.display= "block";
    eventObjects.forEach(object => {
      search(object.name);

    })
  }
  else if(selectedFilter=="Search"){
    searchFilter.style.display= "block";
  }else {
    
  }
})
//function to display search output
const searchOutput=(item)=>{
    let eventObject = item;
    searchResults.innerHTML+=`
  
          <div class="col-lg-4 col-md-6 col-sm-8 col-10 search-card">
              <div class="col ticket-container">
                  <div class="card shadow-sm ticket-body">
                  <img src="./${eventObject.img}"  class="about-image img-fluid" width="">
                  <div class="card-body  ticket-details">
                      <h6 class="event-name text-white">${eventObject.name}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex justify-content-between align-items-center">
                  <!-- Button trigger modal -->
            <button type="button" class="btn  btn-outline-secondary ticket-button" data-bs-toggle="modal" data-bs-target="#${eventObject.id}" >
                View Details
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="${eventObject.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Event Details</h1>
                      <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6 class=" text-dark text-center"> 🎵  ${eventObject.name}  🎵</h6>
                      <p class="text-dark  text-center">Date: 📅  ${eventObject.date}</p>
                      <p class="text-dark  text-center">Time: 🕒 15:00 - 23:00</p>
                      <p class="text-dark  text-center">Price: 💲 R ${eventObject.price}</p>
                    </div>
                    <div class="text-center">                
                    <button type="button" class="btn btn-danger"  onclick="readMore(${eventObject.id})">Read More</button>               
                  </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                    </div>
                  </div>
                </div>
              </div>
                  
             <button class="btn  btn-outline-secondary ticket-button" onclick="buy(${eventObject.id})">Buy Ticket</button>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      `

}


//function to match user input to  an event
const performSearch = (text) =>{
 
  const filteredEvents = eventsArray.filter((item)=> {
   return  item.includes(text);
  });
 
  return filteredEvents;
 }

//function to perform search using user input and return result
const search = (userInput)=>{
searchHeading.style.display="flex";
allEvents.style.display="none";
 // search results
 const results = performSearch(userInput); // call function to match user input with an event
 results.forEach((result)=> {

//loop over each event object to find a match
 for(const item of eventObjects){
    if(item.name.includes(result)){
        searchResults.appendChild(window.parent.document.createElement('br'));
        // call function to output result 
        searchOutput(item);
       
    }}});
}
 
//Event Search
searchButton.addEventListener('click', ()=> { 
  searchResults.innerHTML =""; 
  searchHeading.style.display="none";
  const text = searchText.value;
  search(text);

});


// Event Listing
// Sort the event objectsArray in descending order based on the date property
eventObjects.sort((a, b) => new Date(b.dateFormat) - new Date(a.dateFormat));

// Create a select element to hold the dropdown list
const select = window.parent.document.createElement('select');
select.classList.add('form-select');

const  defaultOption = window.parent.document.createElement("option");
    defaultOption.textContent ="Event List - Select Event ➡"
    select.appendChild(defaultOption);

// Iterate over the sorted event objectsArray
eventObjects.forEach(object => {
    // Create an option element for each object's name property
    const option = window.parent.document.createElement('option');
   option.style.fontSize ="20px"
    // Set the value of the option to the object's name property
  option.value = object.name;
  // Set the text content of the option to the object's name property
  option.textContent = object.name + " --- " +object.dateFormat;
  // Append the option to the select element
  select.appendChild(option);

  select.style.backgroundColor ="transparent";
  select.style.border="none";
  select.style.outline="none";
  
});

// Append the select element to an existing div or the window.parent.document body
let eventList = window.parent.document.querySelector('#event-list')
eventList.appendChild(select);

// Add event listener to the select element
select.addEventListener('change', ()=> {
  searchResults.innerHTML ="";
  searchHeading.style.display="none";
    // Retrieve the selected value and store it in the selectedEvent variable
    const selectedEvent = select.value;
    search(selectedEvent);

});

// Date Filter
const monthSelect = window.parent.document.querySelector("#monthSelect");


//Add an event listener to the main select list to handle the change event:

monthSelect.addEventListener("change", () =>{
  searchResults.innerHTML ="";
  searchHeading.style.display="none";
    const selectedMonth = parseInt(monthSelect.value);
    const filteredData = eventObjects.filter((item)=> {
      const month = new Date(item.dateFormat).getMonth()+1;
      return month == selectedMonth;
      
    });


   filteredData.forEach((item)=> {
    search(item.name);
  });
});



// Location Filter
const locationSelect = window.parent.document.querySelector("#search-select-location");


//Add an event listener to the main select list to handle the change event:

locationSelect.addEventListener("change", ()=> {
  searchResults.innerHTML ="";
  searchHeading.style.display="none";
    const selectedLocation = locationSelect.value;
  
    const filteredData = eventObjects.filter((item)=> {
        return  item.name.toLowerCase().includes(selectedLocation.toLowerCase());
     
     } );
   
   filteredData.forEach((item)=> {
   
    search(item.name);

  });

});

