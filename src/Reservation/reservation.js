import spaceImag from "../../assets/spaceship.jpeg";

const getApi = async () => {
  const requestUrl = `https://api.tvmaze.com/shows/1/episodes`;
  const request = new Request(requestUrl);
  const response = await fetch(request);
  const responseJson = await response.json();
  // console.log(responseJson);

  populateFilmImages(responseJson);
  // populateReservations(responseJson);
};

function populateFilmImages(object) {
  let myFilmImage = document.querySelectorAll(".film");
  var imgArray = [];

  object.forEach((data) => {
    const imageSource = data.image.medium;
    imgArray.push(imageSource);
  });

  myFilmImage.forEach((film, index) => {
    film.src = imgArray[index];
  });
}

const imgSpace = document.querySelector(".space-img");
const reservationContainer = document.getElementById("reserve-container");
imgSpace.src = spaceImag;

window.onload = () => {
  const reservationBtn = document.getElementById("reservation");
  reservationBtn.addEventListener("click", () => {
    alert("1234");
  });
};

export default getApi;
