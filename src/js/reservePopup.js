import updateTotalCommentsCount, { fetchMovieReserve } from './reserveCounter.js';

const url1 = 'https://api.tvmaze.com/shows';
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PPwXByg2agqmbHM3eSAo/comments';
const popup = document.querySelector('.movie-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentsEndpoint, params);
  return response;
};
const fetchMovieData = async (movieId) => {
  const response = await get(`${url1}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  popup.querySelector('.comments').innerHTML = data;
};
const enableClosePopup = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
};

const showComments = (movieId) => {
  fetchMovieReserve(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li>${comment.creation_date} </li>
        <li> ${comment.username}:  ${comment.comment} </li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No Reservation for the moment. You can go ahead and reserve...');
    }
  });
};
const displayMoviePopup = (movieId) => {
  popup.innerHTML = `Loading...<br>
  <span id="close-popup">X</span>`;

  fetchMovieData(movieId).then((data) => {
    popup.innerHTML = `
    <span id="close-popup">X</span>
    <img src="${data.image.medium}" class="popup-img">
    <h3 class="popup-title">${data.name}</h3>
    <table>
      <tr>
        <td>
          <b>premiered:</b> ${data.premiered}
        </td>
        <td>
          <b>Ended:</b> ${data.ended}
        </td>
      </tr>
      <tr>
        <td>
          <b>Language:</b> ${data.language}
        </td>
        <td>
          <b>Type:</b> ${data.type}
        </td>
      </tr>
    </table>
    <h3 class="comment-title">
    Reservation(<span class="total-comments">0</span>)
    </h3>
    <ul class="comments">
      fetching Reservation...
    </ul>
    <form class="com-form">
      <h2>Add a Reservation</h2>
      <input type="text" name="username" placeholder="Your name" required>
      <input type="date" name="comment" required minlength="1">
      <input type="date" name="comment_2" required minlength="1">
      <button type="submit">Submit</button>
    </form>
    `;

    enableClosePopup();
    showComments(movieId);

    const form = popup.querySelector('.com-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.username.value;
      const startDate = form.elements.comment.value;
      const endDate = form.elements.comment_2.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: startDate,
        endDate,
      }).then(() => {
        showComments(movieId);
        updateTotalCommentsCount(movieId);
        form.reset();
      });
    });
  });

  popup.style.display = 'block';
  enableClosePopup();
};
const enableReserve = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};

export default enableReserve;
