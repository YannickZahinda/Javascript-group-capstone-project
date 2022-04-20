import './styles/main.css';
import itemDisplayer from '../Homepage/home.js';
import commentPopup from './comments/commentPopup.js';

const commentBtn = document.getElementById('comment-pop');

itemDisplayer();

commentBtn.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
  commentPopup();
  document.querySelector('.close-comment').addEventListener('click', () => {
    document.querySelector('#comment-section').style.display = 'none';
    window.location.reload();
  });
});
