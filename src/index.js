import './css/style.css';
import './css/comment.css';
import getData, { addLikes, likeCount } from './js/api.js';
import createCardItem from './js/createCardItem.js';
import displayTvShownumbers from './js/itemsCounter.js';
import enableComments from './js/CommentPopup.js';
import enableReserve from './js/reservePopup.js';
import getMovieTitle from './js/getMovieTitle.js';

document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const id = Number(e.target.id);
    const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
    e.target.nextSibling.textContent = `${like + 1} likes`;
    await addLikes(id);
  }
});

const loading = () => {
  const cardsContainer = document.querySelector('.grid-cards-container');
  const loadDiv = document.createElement('div');
  const mask = document.createElement('div');
  loadDiv.classList.add('loading');
  mask.classList.add('mask');
  cardsContainer.append(mask, loadDiv);
};

const removeLoding = () => {
  document.querySelector('.loading').remove();
  document.querySelector('.mask').remove();
};

const renderItems = async () => {
  loading();
  const itemsData = await getData();
  const showCount = 12;
  const showLess = itemsData.slice(0, showCount);
  displayTvShownumbers(showLess);
  removeLoding();
  const likes = await likeCount();
  for (let i = 0; i < showLess.length; i += 1) {
    let numLikes = 0;
    numLikes = likes.filter((like) => like.item_id === showLess[i].id);
    if (numLikes.length > 0) {
      createCardItem(showLess[i], numLikes[0].likes);
    } else {
      createCardItem(showLess[i], 0);
    }
  }
};

renderItems().then(() => {
  enableComments();
  enableReserve();
  getMovieTitle();
});
