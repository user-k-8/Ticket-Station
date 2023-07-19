
const searchButton = window.parent.document.querySelector('#search-button');
const searchText = window.parent.document.querySelector('#search-text');
const searchDate = window.parent.document.querySelector('#search-date');
const searchResults = window.parent.document.querySelector('#search-results');
const collapseButton = window.parent.document.querySelector('.collapseBtn');
const contentDiv = window.parent.document.querySelector('.contentDiv');
const searchContainer =window.parent.document.querySelector('.search-container')


eventsArray=["Johannesburg Music Festival","Cape Town Music Festival", "Durban Music Festival", "Bloemfontein Music Festival", "Pretoria Music Festival", "Polokwane Music Festival", "Pietermaritzburg Music Festival", "Johannesburg Jazz Concert", "Cape Town Jazz Concert", "Durban Jazz Concert", "Bloemfontein Jazz Concert", "Pretoria Jazz Concert","Polokwane Jazz Concert","Pietermaritzburg Jazz Concert","Johannesburg Rock Concert","Cape Town Rock Concert", "Durban Rock Concert","Bloemfontein Rock Concert", "Pretoria Rock Concert", "Polokwane Rock Concert", "Pietermaritzburg Rock Concert"];


// Event object constructor
class MusicEvent{

    constructor(name, date, price, img, id, dateFormat, modalID, ticketID){

        this.name = name;
        this.date = date;
        this.price = price;
        this.img=img;
        this.id =id;
        this.dateFormat= dateFormat;
        this.modalID= modalID;
        this.ticketID = ticketID;
       

    }
}


let johannesburgMusicFestival = new MusicEvent("Johannesburg Music Festival", "11-13 November", 699 , "images/R (2).jpg" , "johannesburgMusicFestival", '2023-11-11' , "modal1", "ticket1"); 
let johannesburgMusicFestivalPopular = new MusicEvent("Johannesburg Music Festival", "11-13 November", 699 , "images/R (2).jpg" , "johannesburgMusicFestivalPopular", '2023-11-11'  , "modal2", "ticket2"); 
let capeTownMusicFestival =new MusicEvent("Cape Town Music Festival", "10-17 October", 599 , "images/tomorrowland-youredm.jpg", "capeTownMusicFestival", '2023-10-17',  "modal3", "ticket3"  );
let capeTownMusicFestivalPopular =new MusicEvent("Cape Town Music Festival", "10-17 October", 599 , "images/tomorrowland-youredm.jpg", "capeTownMusicFestivalPopular", '2023-10-17' , "modal4", "ticket4" );
let durbanMusicFestival =new MusicEvent("Durban Music Festival", "9-17 September",799 ,"images/maxresdefault.jpg","durbanMusicFestival",'2023-09-09' , "modal5" , "ticket5");
let bloemfonteinMusicFestival = new MusicEvent("Bloemfontein Music Festival", "8-14 March", 499 , "images/sunburn-fest.jpg", "bloemfonteinMusicFestival", '2023-03-14' , "modal6" , "ticket6");
let pretoriaMusicFestival = new MusicEvent("Pretoria Music Festival", "15-17 May", 599 , "images/Imagesplash01.jpg", "pretoriaMusicFestival", '2023-05-15' , "moda7", "ticket7");
let polokwaneMusicFestival = new MusicEvent("Polokwane Music Festival", "16-22 July", 799 , "images/R (6).jpg", "polokwaneMusicFestival", '2023-07-16' , "modal8", "ticket8");
let pietermaritzburgFestival = new MusicEvent("Pietermaritzburg Music Festival", "24-27 August", 599 , "images/abstral-official-bdlMO9z5yco-unsplash.jpg", "pietermaritzburgFestival", '2023-08-24' , "modal9", "ticket9");
let johannesburgJazzConcert = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699 , "images/R.png", "johannesburgJazzConcert", '2023-09-15'  , "modal10", "ticket10");
let johannesburgJazzConcertPopular = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699 , "images/R.png", "johannesburgJazzConcertPopular", '2023-09-15' , "modal11", "ticket11" );
let capeTownJazzConcert = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599 , "images/R (4).jpg", "capeTownJazzConcert", '2023-04-18' , "modal12" , "ticket12");
let capeTownJazzConcertPopular = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599 , "images/R (4).jpg", "capeTownJazzConcertPopular", '2023-04-18' , "modal13", "ticket13");
let durbanJazzConcert = new MusicEvent("Durban Jazz Concert", "8-12 June", 499 , "images/maxresdefault (1).jpg", "durbanJazzConcert", '2023-06-08' , "modal14", "ticket14");
let bloemfonteinJazzConcert = new MusicEvent("Bloemfontein Jazz Concert", "5-9 November" , 499 , "images/The-Jazz-Experience-A-Fine-Smooth-Jazz-Session-cover.jpg", "bloemfonteinJazzConcert", '2023-11-05' , "modal15", "ticket15");
let pretoriaJazzConcert = new MusicEvent("Pretoria Jazz Concert","20-24 December", 699 , "images/R (7).jpg", "pretoriaJazzConcert",'2023-12-20' , "modal16", "ticket16" );
let polokwaneJazzConcert = new MusicEvent("Polokwane Jazz Concert", "16-20 February", 399 , "images/OIP (7).jpg", "polokwaneJazzConcert", '2023-02-16' , "modal17", "ticket17");
let pietermaritzburgJazzConcert = new MusicEvent("Pietermaritzburg Jazz Concert", "27-31 October", 499 , "images/jazz-image-3.jpg", "pietermaritzburgJazzConcert", '2023-10-27' , "modal18", "ticket18");
let johannesburgRockConcert = new MusicEvent("Johannesburg Rock Concert", "22-25 January", 399 , "images/R.jpg", "johannesburgRockConcert", '2023-01-22' , "modal19", "ticket19");
let johannesburgRockConcertPopular = new MusicEvent("Johannesburg Rock Concert", "22-25 January", 399 , "images/R.jpg", "johannesburgRockConcertPopular", '2023-01-22' , "modal20", "ticket20");
let capeTownRockConcert = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399 , "images/OIP (1).jpg", "capeTownRockConcert",  '2023-08-23' , "modal21", "ticket21");
let capeTownRockConcertPopular = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399 , "images/OIP (1).jpg", "capeTownRockConcertPopular",  '2023-08-23' , "modal22", "ticket22");
let durbanRockConcert = new MusicEvent("Durban Rock Concert", "2-5 July", 599 , "images/R (1).jpg", "durbanRockConcert", '2023-07-02' , "modal23", "ticket23");
let bloemfonteinRockConcert = new MusicEvent("Bloemfontein Rock Concert", "24-28 May" , 499 , "images/OIP (2).jpg", "bloemfonteinRockConcert", '2023-05-24' , "modal24", "ticket24");
let pretoriaRockConcert = new MusicEvent("Pretoria Rock Concert", "28-31 March", 599 , "images/OIP (9).jpg", "pretoriaRockConcert", '2023-03-28' , "modal25", "ticket25");
let polokwaneRockConcert= new MusicEvent("Polokwane Rock Concert", "24-28 June",  499 , "images/R (1).png", "polokwaneRockConcert", '2023-06-24' , "modal26" , "ticket26");
let pietermaritzburgRockConcert = new MusicEvent("Pietermaritzburg Rock Concert", "10-14 December", 499 , "images/OIP (3).jpg", "pietermaritzburgRockConcert", '2023-12-10'  , "modal27", "ticket27");
let eventObjects = [johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConcert, johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert, pietermaritzburgRockConcert, johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular];






//adding events  to webpage
let events =  [ johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular,johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConcert, johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert,pietermaritzburgRockConcert];

let popularEvents =  [ johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular];
let musicFestivals =  [ johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival];
let rockConcerts=[  johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert];
let jazzConcerts =[ johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert];


const slideOutputDouble = (arr,i)=>{

  //Generate the HTML content for the object using its properties
    const objectHtml =
      `     
      <div class="row">
          <div class="col-lg-6 col-12">
              <div class="col ticket-container">
                  <div class="card shadow-sm ticket-body">
                  <img src="./${arr[i].img}"  class="about-image img-fluid" width="">
                  <div class="card-body  ticket-details">
                      <h6 class="event-name text-white">${arr[i].name}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                  <div>
                  <!-- Button trigger modal -->
            <button type="button" class="btn  btn-outline-secondary ticket-button" data-bs-toggle="modal" data-bs-target="#${arr[i].modalID}" >
                View Details
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="${arr[i].modalID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Event Details</h1>
                      <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6 class=" text-dark text-center"> 🎵  ${arr[i].name}  🎵</h6>
                      <p class="text-dark  text-center">Date: 📅  ${arr[i].date}</p>
                      <p class="text-dark  text-center">Time: 🕒 15:00 - 23:00</p>
                      <p class="text-dark  text-center">Price: 💲 R ${arr[i].price}</p>
            
                     
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      
                    </div>
                  </div>
                </div>
              </div>
                  
              <button class="btn  btn-outline-secondary ticket-button" onclick="buy(${arr[i].id})">Buy Ticket</button>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div class="col-lg-6 col-12">
          <div class="col ticket-container">
              <div class="card shadow-sm ticket-body">
              <img src="./${arr[i+1].img}"  class="about-image img-fluid" width="">
              <div class="card-body  ticket-details">
                  <h6 class="event-name text-white">${arr[i+1].name}</h6>
              <div class="d-flex justify-content-between align-items-center">
              <div>
              <!-- Button trigger modal -->
        <button type="button" class="btn  btn-outline-secondary ticket-button" data-bs-toggle="modal" data-bs-target="#${arr[i+1].modalID}" >
            View Details
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="${arr[i+1].modalID}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Event Details</h1>
                  <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h6 class=" text-dark text-center"> 🎵  ${arr[i+1].name}  🎵</h6>
                      <p class="text-dark  text-center">Date: 📅  ${arr[i+1].date}</p>
                      <p class="text-dark  text-center">Time: 🕒 15:00 - 23:00</p>
                      <p class="text-dark  text-center">Price: 💲 R ${arr[i+1].price}</p>
        
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
              
          <button class="btn  btn-outline-secondary ticket-button" onclick="buy(${arr[i+1].id})">Buy Ticket</button>
              </div>
              
              </div>
              </div>
              </div>
              </div>
      </div>
      </div>
    `

return objectHtml
}


const  slideOutputSingle= (arr,j)=>{
  const objectHTML =
  ` 
  <div class="row">
      <div class=" col-12">
          <div class="col ticket-container">
              <div class="card shadow-sm ticket-body">
              <img src="./${arr[j].img}"  class="about-image img-fluid" width="">
              <div class="card-body  ticket-details">
                  <h6 class="event-name text-white">${arr[j].name}</h6>
              <div class="d-flex justify-content-between align-items-center">
              <div>
              <!-- Button trigger modal -->
        <button type="button" class="btn  btn-outline-secondary ticket-button" data-bs-toggle="modal" data-bs-target="#${arr[j].id}" >
            View Details
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="${arr[j].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Event Details</h1>
                  <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h6 class=" text-dark text-center"> 🎵  ${arr[j].name}  🎵</h6>
                  <p class="text-dark  text-center">Date: 📅  ${arr[j].date}</p>
                  <p class="text-dark  text-center">Time: 🕒 15:00 - 23:00</p>
                  <p class="text-dark  text-center">Price: 💲 R ${arr[j].price}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
              
              <button class="btn  btn-outline-secondary ticket-button" onclick="buy(${arr[j].id})">Buy Ticket</button>
              </div>
              
              </div>
              </div>
              </div>
              </div>
  </div>
  </div>
`
return objectHTML
}

//fuction to add events to slides
const addHTML = (array,firstDiv,existingDiv,j,type)=>{
  if(type=="double"){
    var objectHTML =slideOutputDouble(array,j);
  }else{
    var objectHTML =slideOutputSingle(array,j);
  }
 
  // Append the HTML content to the existing div
  if(j==0){
    const newHTML = `<div class="carousel-item active">` + objectHTML + `</div>`
    firstDiv.innerHTML+= newHTML;
  }
  else{
    const newHTML = `<div class="carousel-item">` + objectHTML + `</div>`
  existingDiv.innerHTML += newHTML;
  }

  return;
}
   
  //popular events

  //single slide
  // Iterate over the objectsArray
  for(let j=0; j<6; j++){
    // Get the existing div with the matching id
    let existingDiv = window.parent.document.querySelector('#second-slide-container')
    let firstDiv =window.parent.document.querySelector('#secondSlide')
     
     // Generate the HTML content for the object using its properties
    
    addHTML(popularEvents,firstDiv,existingDiv,j, "single");
  
  
  };

  //double slide
  // Iterate over the objectsArray
 for(let i=0; i<6; i++){
    // Get the existing div with the matching id
    const existingDiv = window.parent.document.querySelector('#slide-container')
    const firstDiv =window.parent.document.querySelector('#firstSlide')

    // Generate the HTML content for the object using its properties

    addHTML(popularEvents,firstDiv,existingDiv,i, "double");
   i+=1;
  };

//music festivals

//single slide
  // Iterate over the objectsArray
for(let j=0; j<6; j++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#second-slide-container-fest')
  const firstDiv =window.parent.document.querySelector('#secondSlide-fest')
  // Generate the HTML content for the object using its properties
  addHTML(musicFestivals,firstDiv,existingDiv,j, "single");

};

//double slide
  // Iterate over the objectsArray
for(let i=0; i<6; i++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#slide-container-fest')
  const firstDiv =window.parent.document.querySelector('#firstSlide-fest')
 
  // Generate the HTML content for the object using its properties
  addHTML(musicFestivals,firstDiv,existingDiv,i, "double");
  i+=1;
};

//rock concerts

//single slide
  // Iterate over the objectsArray
for(let j=0; j<6; j++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#second-slide-container-rock')
  const firstDiv =window.parent.document.querySelector('#secondSlide-rock')
  // Generate the HTML content for the object using its properties
  addHTML(rockConcerts,firstDiv,existingDiv,j, "single");

};

//double slide
  // Iterate over the objectsArray
for(let i=0; i<6; i++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#slide-container-rock')
  const firstDiv =window.parent.document.querySelector('#firstSlide-rock')
 
  // Generate the HTML content for the object using its properties
  addHTML(rockConcerts,firstDiv,existingDiv,i, "double");
  i+=1;
};

//jazz concerts

//single slide
  // Iterate over the objectsArray
for(let j=0; j<6; j++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#second-slide-container-jazz')
  const firstDiv =window.parent.document.querySelector('#secondSlide-jazz')
  // Generate the HTML content for the object using its properties
  addHTML(jazzConcerts,firstDiv,existingDiv,j, "single");

};

//double slide
  // Iterate over the objectsArray
for(let i=0; i<6; i++){
  // Get the existing div with the matching id
  const existingDiv = window.parent.document.querySelector('#slide-container-jazz')
  const firstDiv =window.parent.document.querySelector('#firstSlide-jazz')
 
  // Generate the HTML content for the object using its properties
  addHTML(jazzConcerts,firstDiv,existingDiv,i, "double");
   i+=1;
};

//fuction to store selected event in localStorage
function buy(object){

  var a=object;
  localStorage.setItem("a", JSON.stringify(a));
  

if("logStatus" in localStorage){
  window.location.href = "ticket.html";
  
}
else{
  window.location.href = "signup.html";
}
}




