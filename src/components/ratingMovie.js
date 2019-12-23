import React from "react";

function ratingMovie({ rate }) {
  let starts = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      starts.push(<i class="fas fa-star" ></i>);
    } else {
      starts.push(<i class="far fa-star" ></i>);
    }
  }
  return starts;
}

export default ratingMovie;