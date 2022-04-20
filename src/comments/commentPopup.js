import Img from '../asset/spaceship.jpeg';

const addComment = document.querySelector('#comment-section');

const commentPopup = () => {
  addComment.innerHTML = `
   <div class="comment-wrapper">
   <button class="close-comment">&times;</button>
    <h1>Comment Section </h1>
    <img src=${Img} alt="spaceship" width="350px" height="200px">
    <h2 class="comment-text">Space 3</h2>
    <div class="comment-rows">
    <div class="row"> 
    <h4>Fuel: <span>titanium</span></h4>
    <h4>Weigh: <span>400</span></h4>
    </div>
    <div class="row">
        <h4>Length: <span>100,000</span></h4>
        <h4>Power: <span>100,000,000 </span></h4>
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