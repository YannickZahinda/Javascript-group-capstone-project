import "./styles/main.css";
import itemDisplayer from "../Homepage/home.js";
import getApi from "../src/Reservation/reservation.js";
import commentPopup from "../src/comments/commentPopup.js";

// window.onload = () => {
//     const commentBtn = document.getElementById("comments");
//     const reservationBtn = document.getElementById("reservation");
//         commentBtn.addEventListener("click", () => {
//           commentPopup();
//         });
      
//         reservationBtn.addEventListener("click", () => {
//           reservationPop();
//         });
// }



itemDisplayer();
getApi();
