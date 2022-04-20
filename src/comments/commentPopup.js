import Img from '../asset/spaceship.jpeg';

const addComment = document.querySelector('#comment-section');

const commentPopup = () => {
  addComment.style.display = '';
  addComment.classList.add('show');
  addComment.innerHTML = `
   <div class="comment-wrapper">
   <button class="close-comment">&times;</button>
    <h1>Movies heer</h1>
    <img src=${Img} alt="spaceship" width="350px" height="200px">
    <h4 class="comment-text">url:https://www.tvmaze.com/episodes/8/under-the-dome-1x08-thicker-than-water</h4>
    <div class="comment-rows">
    <div class="row"> 
    <h4>Airdate: <span>12.10.2008</span></h4>
    <h4>Type: <span>400</span></h4>
    </div>
    <div class="row">
        <h4>Rating: <span>7.7</span></h4>
        <h4>Season: <span>6 </span></h4>
    </div>
    </div>
    <h3 class="comment-text">Comments (2) </h3>
    <p>03/11/2022 Alex: I'd love to buy it</p>
    <p>03/12/2022 Mia: I love</p>
    <h2 class="comment-text">Add a comment </h2>
    <form class="comment-form">
    <div class="input-comment"><input type="text" placeholder="Your name" ></div>
    <div class="message-comment"><textarea> Your insights</textarea></div>
    <button class="comment-button">Comment</button>
    </form>
    </div>
 `;
};

export default commentPopup;