"use strict";

let input = document.getElementById("input");
let buttonAdd = document.getElementById("add");
let buttonRemove = document.getElementById("remove");
let tbody = document.getElementById("tbody");

let movieList = [];

function displayMovies() {
  tbody.innerHTML = "";

  for (let i = 0; i < movieList.length; i++) {
    let tr = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.textContent = movieList[i];
    tr.appendChild(nameCell);
    tbody.appendChild(tr);
  }
}

buttonAdd.addEventListener("click", () => {
  let movieName = input.value.trim();

  if (movieName !== "") {
    movieList.push(movieName);
    input.value = "";
    displayMovies();
  }
});

buttonRemove.addEventListener("click", () => {
  let movieName = input.value.trim();

  if (movieName !== "") {
    // find the index of the movie (case-insensitive match)
    let index = movieList.findIndex(
      (movie) => movie.toLowerCase() === movieName.toLowerCase()
    );

    if (index !== -1) {
      movieList.splice(index, 1); // remove movie
      displayMovies();
    }

    input.value = "";
  }
});
