import getApi from "../src/Reservation/reservation.js";

const itemsContainer = document.querySelector(".cards-container");
const itemDisplayer = async (e) => {
  const request = await fetch(`https://api.tvmaze.com/shows/1/episodes`);
  const response = await request.json();
  for (let i = 0; i < response.length; i += 1) {
    const item = `<div class="card">
    <figure>
        <img  class="film" alt="film-img">
        <div class='caption'>
            <h4>${response[i].name}</h4>
            <p><i class="fas fa-heart heart "></i></p>
        </div>
    </figure>
    <div class="comments-reservations">
        <div class="comment"><button type='button' id='comments'>Comment</button></div>
        <div class="reservation"><button type='button' id='reservation'> Reservation</button></div>
    </div> 
  </div>`;
      itemsContainer.innerHTML += item;
  }

};



export default itemDisplayer;
