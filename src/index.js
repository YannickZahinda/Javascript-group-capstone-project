import './styles/main.css';
import commentPopup from './comments/commentPopup.js';

const commentBtn = document.getElementById('comment-pop');

commentBtn.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
  commentPopup();
});
