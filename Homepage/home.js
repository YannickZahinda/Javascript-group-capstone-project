import img from '../assets/film-icon.jpeg';

const itemsContainer = document.querySelector('.cards-container');

const objData = [
    {
        imgFilm : '',
        titleFilm : 'film one',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    },
    {
        imgFilm : '',
        titleFilm : 'film two',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    },
    {
        imgFilm : '',
        titleFilm : 'film three',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    },
    {
        imgFilm : '',
        titleFilm : 'film four',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    },
    {
        imgFilm : '',
        titleFilm : 'film five',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    },
    {
        imgFilm : '',
        titleFilm : 'film six',
        likeIcon : '<i class="fas fa-heart heart "></i>',
    }
]

const itemDisplayer = () => {
    for (let i = 0; i < objData.length; i += 1){
    let item = `<div class="card">
    <figure>
        <img src=${img} class="film" alt="film-img">
        <div class='caption'>
            <h4>${objData[i].titleFilm}</h4>
            <p>${objData[i].likeIcon}</p>
        </div>
    </figure>
    <div class="comments-reservations">
        <div class="comment"><input id = 'comments' type='text' placeholder = 'Comment' /></div>
        <div class="reservation">Reservation</div>
    </div>
  </div>`;
    itemsContainer.innerHTML += item;
}

  
}

  

export default itemDisplayer; 