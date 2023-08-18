
const searchButton = window.parent.document.querySelector('#search-button');
const searchText = window.parent.document.querySelector('#search-text');
const searchDate = window.parent.document.querySelector('#search-date');
const searchResults = window.parent.document.querySelector('#search-results');
const collapseButton = window.parent.document.querySelector('.collapseBtn');
const contentDiv = window.parent.document.querySelector('.contentDiv');
const searchContainer =window.parent.document.querySelector('.search-container');



eventsArray=["Johannesburg Music Festival","Cape Town Music Festival", "Durban Music Festival", "Bloemfontein Music Festival", "Pretoria Music Festival", "Polokwane Music Festival", "Pietermaritzburg Music Festival", "Johannesburg Jazz Concert", "Cape Town Jazz Concert", "Durban Jazz Concert", "Bloemfontein Jazz Concert", "Pretoria Jazz Concert","Polokwane Jazz Concert","Pietermaritzburg Jazz Concert","Johannesburg Rock Concert","Cape Town Rock Concert", "Durban Rock Concert","Bloemfontein Rock Concert", "Pretoria Rock Concert", "Polokwane Rock Concert", "Pietermaritzburg Rock Concert"];


// Event object constructor
class MusicEvent{

    constructor(name, date, price, img, id, dateFormat, modalID, ticketID, location, artists){

        this.name = name;
        this.date = date;
        this.price = price;
        this.img=img;
        this.id =id;
        this.dateFormat= dateFormat;
        this.modalID= modalID;
        this.ticketID = ticketID;
       this.location=location;
       this.artists= artists;

    }
}


let johannesburgMusicFestival = new MusicEvent("Joburg Music Festival 2023", "11-13 November", 699 , "images/R (2).jpg" , "johannesburgMusicFestival", '2023-11-11' , "modal1", "ticket1", "Harmonia Gardens Amphitheater", "1. Taylor Sparks 2. The Beatlejams 3. Neon Skyline 4. Starstruck Avenue"); 
let johannesburgMusicFestivalPopular = new MusicEvent("Joburg Music Festival 2023", "11-13 November", 699 , "images/R (2).jpg" , "johannesburgMusicFestivalPopular", '2023-11-11'  , "modal2", "ticket2", "Harmonia Gardens Amphitheater", "1. Taylor Sparks 2. The Beatlejams 3. Neon Skyline 4. Starstruck Avenue"); 
let capeTownMusicFestival =new MusicEvent("Cape Town Music Festival", "10-17 October", 599 , "images/tomorrowland-youredm.jpg", "capeTownMusicFestival", '2023-10-17',  "modal3", "ticket3" , "Melody Mirage Dome" , "1. Willow Wind2. The Whispering Pines 3. Sunflower Strings 4. Wildwood Wanderers");
let capeTownMusicFestivalPopular =new MusicEvent("Cape Town Music Festival", "10-17 October", 599 , "images/tomorrowland-youredm.jpg", "capeTownMusicFestivalPopular", '2023-10-17' , "modal4", "ticket4", "Melody Mirage Dome","1. Willow Wind2. The Whispering Pines 3. Sunflower Strings 4. Wildwood Wanderers");
let durbanMusicFestival =new MusicEvent("Durban Music Festival 2023", "9-17 September",799 ,"images/maxresdefault.jpg","durbanMusicFestival",'2023-09-09' , "modal5" , "ticket5", "TempoTropolis Stadium", "1. Electric Pulse 2. Luna Rhythms 3. Synthwave Syndicate 4. Techno Titans");
let bloemfonteinMusicFestival = new MusicEvent("Bloemfontein Music Festival", "8-14 March", 499 , "images/sunburn-fest.jpg", "bloemfonteinMusicFestival", '2023-03-14' , "modal6" , "ticket6", "Rhythm Realm Arena", "1. Dusty Trails 2. Southern Harmony 3. Backroad Ramblers 4. Midnight Rodeo");
let pretoriaMusicFestival = new MusicEvent("Pretoria Music Festival", "15-17 May", 599 , "images/Imagesplash01.jpg", "pretoriaMusicFestival", '2023-05-15' , "moda7", "ticket7", "Crescendo Cove Pavilion", "1. Velvet Soul 2. Moonlight Groove 3. Soulful Serenade 4. Midnight Blues");
let polokwaneMusicFestival = new MusicEvent("Polokwane Music Festival", "16-22 July", 799 , "images/R (6).jpg", "polokwaneMusicFestival", '2023-07-16' , "modal8", "ticket8", "Euphonic Oasis Garden", "1. Echoes of Tomorrow 2. The Cosmic Runaways 3. Gravity's Edge 4. Electric Dreamscape");
let pietermaritzburgFestival = new MusicEvent("Pietermaritzburg Music Festival", "24-27 August", 599 , "images/abstral-official-bdlMO9z5yco-unsplash.jpg", "pietermaritzburgFestival", '2023-08-24' , "modal9", "ticket9",  "Harmonic Harbor Pier", "1. Funky Fusion2. Soul Train Revival 3. Groove Nation 4. Funkadelic Jam");
let johannesburgJazzConcert = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699 , "images/R.png", "johannesburgJazzConcert", '2023-09-15'  , "modal10", "ticket10", "Serenade Sanctuary Hall", "1. Caribbean Breeze 2. Island Vibe 3. Reggae Roots Collective 4. Rhythm Redemption");
let johannesburgJazzConcertPopular = new MusicEvent("Johannesburg Jazz Concert", "15-19 September", 699 , "images/R.png", "johannesburgJazzConcertPopular", '2023-09-15' , "modal11", "ticket11", "Serenade Sanctuary Hall", "1. Caribbean Breeze 2. Island Vibe 3. Reggae Roots Collective 4. Rhythm Redemption" );
let capeTownJazzConcert = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599 , "images/R (4).jpg", "capeTownJazzConcert", '2023-04-18' , "modal12" , "ticket12", "Cadence Castle Courtyard", "1. Mic Drop Kings 2. Flow Dynasty 3. Lyricist Lounge 4. Urban Rhythm Crew");
let capeTownJazzConcertPopular = new MusicEvent("Cape Town Jazz Concert", "18-21 April", 599 , "images/R (4).jpg", "capeTownJazzConcertPopular", '2023-04-18' , "modal13", "ticket13", "Cadence Castle Courtyard", "1. Mic Drop Kings 2. Flow Dynasty 3. Lyricist Lounge 4. Urban Rhythm Crew");
let durbanJazzConcert = new MusicEvent("Durban Jazz Concert 2023", "8-12 June", 499 , "images/maxresdefault (1).jpg", "durbanJazzConcert", '2023-06-08' , "modal14", "ticket14", "Sonorous Skyline Rooftop", "1. Serenade Symphony 2. Modern Maestros 3. Orchestral Elegance 4. Melodic Fusion");
let bloemfonteinJazzConcert = new MusicEvent("Bloemfontein Jazz Concert", "5-9 November" , 499 , "images/The-Jazz-Experience-A-Fine-Smooth-Jazz-Session-cover.jpg", "bloemfonteinJazzConcert", '2023-11-05' , "modal15", "ticket15", "Melodia Meadows Field", "1. Smooth Jazz All-Stars 2. Jazz Noir Quartet 3. Swingin' Soul Ensemble 4. Jazz Odyssey");
let pretoriaJazzConcert = new MusicEvent("Pretoria Jazz Concert 2023","20-24 December", 699 , "images/R (7).jpg", "pretoriaJazzConcert",'2023-12-20' , "modal16", "ticket16", "Harmony Haven Retreat", "1. Thunderstrike 2. Infernal Abyss 3. Meltdown Mayhem 4. Dark Requiem" );
let polokwaneJazzConcert = new MusicEvent("Polokwane Jazz Concert", "16-20 February", 399 , "images/OIP (7).jpg", "polokwaneJazzConcert", '2023-02-16' , "modal17", "ticket17", "Decibel Den Club", "1. Salsa Fiesta 2. Rumba Rhythms 3. Tango Fire 4. Mariachi Magic");
let pietermaritzburgJazzConcert = new MusicEvent("Pietermaritzburg Jazz Concert", "27-31 October", 499 , "images/jazz-image-3.jpg", "pietermaritzburgJazzConcert", '2023-10-27' , "modal18", "ticket18",  "Harmonic Harbor Pier", "1. Funky Fusion2. Soul Train Revival 3. Groove Nation 4. Funkadelic Jam");
let johannesburgRockConcert = new MusicEvent("Joburg Rock Concert 2023", "22-25 January", 399 , "images/R.jpg", "johannesburgRockConcert", '2023-01-22' , "modal19", "ticket19", "Chorus Canyon Theatre", "1. Stellar Voices 2. Pop Princess Collective 3. Diamond Divas 4. Glitterati Queens");
let johannesburgRockConcertPopular = new MusicEvent("Joburg Rock Concert 2023", "22-25 January", 399 , "images/R.jpg", "johannesburgRockConcertPopular", '2023-01-22' , "modal20", "ticket20", "Chorus Canyon Theatre", "1. Stellar Voices 2. Pop Princess Collective 3. Diamond Divas 4. Glitterati Queens");
let capeTownRockConcert = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399 , "images/OIP (1).jpg", "capeTownRockConcert",  '2023-08-23' , "modal21", "ticket21", "Symphonia Grove Grove", "1. Midnight Blues 2. Soulful Stompers 3. Delta Crossroads 4. Bluesy Jam Session");
let capeTownRockConcertPopular = new MusicEvent("Cape Town Rock Concert", "10-14 August", 399 , "images/OIP (1).jpg", "capeTownRockConcertPopular",  '2023-08-23' , "modal22", "ticket22", "Symphonia Grove Grove", "1. Midnight Blues 2. Soulful Stompers 3. Delta Crossroads 4. Bluesy Jam Session");
let durbanRockConcert = new MusicEvent("Durban Rock Concert 2023", "2-5 July", 599 , "images/R (1).jpg", "durbanRockConcert", '2023-07-02' , "modal23", "ticket23", "Orchestra Oasis Oasis", "1. Acoustic Alchemy 2. Unplugged Harmonies 3. Chilled Strings 4. Acoustic Revival");
let bloemfonteinRockConcert = new MusicEvent("Bloemfontein Rock Concert", "24-28 May" , 499 , "images/OIP (2).jpg", "bloemfonteinRockConcert", '2023-05-24' , "modal24", "ticket24", "Melody Mesa Ridge", "1. Global Groove Ensemble 2. Worldbeat Wanderers 3. Ethereal Echoes 4. Transcendental Tribe");
let pretoriaRockConcert = new MusicEvent("Pretoria Rock Concert 2023", "28-31 March", 599 , "images/OIP (9).jpg", "pretoriaRockConcert", '2023-03-28' , "modal25", "ticket25", "Melodious Moonlight Terrace", "1. Eternal Nightfall 2. Shadow's Embrace 3. Gothic Requiem 4. Dark Melancholia");
let polokwaneRockConcert= new MusicEvent("Polokwane Rock Concert", "24-28 June",  499 , "images/R (1).png", "polokwaneRockConcert", '2023-06-24' , "modal26" , "ticket26", "Harmonic Harbor Pier", "1. Funky Fusion2. Soul Train Revival 3. Groove Nation 4. Funkadelic Jam");
let pietermaritzburgRockConcert = new MusicEvent("Pietermaritzburg Rock Concert", "10-14 December", 499 , "images/OIP (3).jpg", "pietermaritzburgRockConcert", '2023-12-10'  , "modal27", "ticket27",  "Harmonic Harbor Pier", "1. Funky Fusion2. Soul Train Revival 3. Groove Nation 4. Funkadelic Jam");
let eventObjects = [johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival, pietermaritzburgFestival, johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert, pietermaritzburgJazzConcert, johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert, pietermaritzburgRockConcert];


//adding events  to webpage

let popularEvents =  [ johannesburgMusicFestivalPopular,johannesburgJazzConcertPopular,johannesburgRockConcertPopular,capeTownMusicFestivalPopular,capeTownRockConcertPopular,capeTownJazzConcertPopular];
let musicFestivals =  [ johannesburgMusicFestival, capeTownMusicFestival, durbanMusicFestival, bloemfonteinMusicFestival, pretoriaMusicFestival, polokwaneMusicFestival];
let rockConcerts=[  johannesburgRockConcert, capeTownRockConcert, durbanRockConcert, bloemfonteinRockConcert, pretoriaRockConcert, polokwaneRockConcert];
let jazzConcerts =[ johannesburgJazzConcert, capeTownJazzConcert, durbanJazzConcert, bloemfonteinJazzConcert, pretoriaJazzConcert, polokwaneJazzConcert];


const  slideOutput= (eventArray,j)=>{
  const objectHTML =
  ` 
  <div class="carousel-item col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div class="col ticket-container">
              <div class="card shadow-sm ticket-body">
              <img src="./${eventArray[j].img}"  class="about-image img-fluid" width="">
              <div class="card-body  ticket-details ">
                  <h6 class="event-name text-white">${eventArray[j].name}</h6>
              <div class="d-flex justify-content-between align-items-center ">
              <div>
              <!-- Button trigger modal -->
        <button type="button" class="btn btn-sm  btn-outline-secondary ticket-button details-button" data-bs-toggle="modal" data-bs-target="#${eventArray[j].id}" >
            View Details
          </button>
              
              <button class="btn btn-sm btn-outline-secondary ticket-button" onclick="buy(${eventArray[j].id})">Buy Ticket</button>
              </div>
              
              </div>
              </div>
              </div>
              </div>
  </div>
  
`
return objectHTML;
}

const modalOutput= (eventArray, j)=>{

  const modalHTML =`
   <!-- Modal -->
          <div class="modal fade" id="${eventArray[j].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Event Details</h1>
                  <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h6 class=" text-dark text-center"> 🎵  ${eventArray[j].name}  🎵</h6>
                  <p class="text-dark  text-center">Date: 📅  ${eventArray[j].date}</p>
                  <p class="text-dark  text-center">Time: 🕒 15:00 - 23:00</p>
                  <p class="text-dark  text-center">Price: 💲 R ${eventArray[j].price}</p>             
                </div>
                <div class="text-center">                
                  <button type="button" class="btn btn-primary"  onclick="readMore(${eventArray[j].id})">Read More</button>               
                </div>
                <div class="modal-footer">                
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                
                </div>
              </div>
            </div>
          </div>`
          return modalHTML;
}

let sliderItemContainer = document.getElementById('item-slider-popular');
let modalContainer1 =document.getElementById('modal-container1');
let modalContainer2 =document.getElementById('modal-container2');
//popular  events

for(let i =0; i<popularEvents.length; i++){
  let itemHTML = slideOutput(popularEvents,i);
  sliderItemContainer.innerHTML += itemHTML;
  let modalHTML= modalOutput(popularEvents,i);
  modalContainer1.innerHTML += modalHTML;
}

//music festivals
let sliderItemContainerFest = document.getElementById('item-slider-fest');

for(let i =0; i<musicFestivals.length; i++){
  let itemHTML = slideOutput(musicFestivals,i);
  sliderItemContainerFest.innerHTML += itemHTML;
  let modalHTML= modalOutput(musicFestivals,i);
  modalContainer2.innerHTML += modalHTML;

}

//rock concerts
let sliderItemContainerRock = document.getElementById('item-slider-rock');

for(let i =0; i<rockConcerts.length; i++){
  let itemHTML = slideOutput(rockConcerts,i);
  sliderItemContainerRock.innerHTML += itemHTML;
  let modalHTML= modalOutput(rockConcerts,i);
  modalContainer2.innerHTML += modalHTML;

}

//jazz concerts
let sliderItemContainerJazz= document.getElementById('item-slider-jazz');

for(let i =0; i<jazzConcerts.length; i++){
  let itemHTML = slideOutput(jazzConcerts,i);
  sliderItemContainerJazz.innerHTML += itemHTML;
  let modalHTML= modalOutput(jazzConcerts,i);
  modalContainer2.innerHTML += modalHTML;

}

//fuction to store selected event in localStorage
function buy(object){

  var a=object;
  localStorage.setItem("a", JSON.stringify(a));
  

if("logStatus" in localStorage){
  window.location.href = "ticket.html";
  
}
else{
  localStorage.setItem("redirect", JSON.stringify({redirect:'yes'}));
  window.location.href = "signup.html";
  
}
}


function readMore(obj){
  var a=obj;
  localStorage.setItem("a", JSON.stringify(a));
  window.location.href = "decription.html";

}

function logOut(){
  localStorage.removeItem('logStatus');
  window.location.href = "index.html";
}

