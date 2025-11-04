const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu

const selectMovieDropdown = document.querySelector("#selectMovie");
const movieNameEl = document.getElementById("movieName");
const moviePriceEl = document.getElementById("moviePrice");

moviesList.forEach((_movie) => {
  const option = document.createElement("option");
  option.value = _movie.movieName;
  option.textContent = `
        ${_movie.movieName} $${_movie.price}
    `;
  option.dataset.price = _movie.price;
  selectMovieDropdown.appendChild(option);
});

//updating the movie name and movie price based on the selection in the dropdown
selectMovieDropdown.addEventListener("change", (event) => {
  console.log(event.target.selectedOptions[0]);
  const selectedOption = event.target.selectedOptions[0];
  const movieName = selectedOption.value;
  const moviePrice = selectedOption.dataset.price;
  console.log(movieNameEl, moviePriceEl);
  movieNameEl.textContent = movieName;
  moviePriceEl.textContent = moviePrice;
});

//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
