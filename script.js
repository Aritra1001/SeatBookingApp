const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu

const selectMovieDropdown = document.querySelector("#selectMovie");
const movieNameEl = document.getElementById("movieName");
const moviePriceEl = document.getElementById("moviePrice");
let ticketPrice = moviesList[0].price; //setting to a default price

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
  const selectedOption = event.target.selectedOptions[0];
  const movieName = selectedOption.value;
  const moviePrice = selectedOption.dataset.price;
  movieNameEl.textContent = movieName;
  moviePriceEl.textContent = moviePrice;
  ticketPrice = moviePrice;
});

//Add eventLister to each unoccupied seat

const allSeats = document.querySelectorAll("#seatCont .seat");
const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
const numberOfSeatsEl = document.getElementById("numberOfSeat");
const totalPriceEl = document.getElementById("totalPrice");
let selectedSeats = [];

allSeats.forEach((_seat, _index) => {
  _seat.addEventListener("click", () => {
    if (_seat.classList.contains("occupied")) {
      console.log("here");
      return;
    }
    _seat.classList.toggle("selected");

    if (_seat.classList.contains("selected")) {
      selectedSeats.push(_index);
    } else {
      selectedSeats = selectedSeats.filter((_i) => _i !== _index);
    }
    updateSelectedSeatsDisplay();
    updatePrice();
  });
});

function updateSelectedSeatsDisplay() {
  selectedSeatsHolder.innerHTML = "";
  if (selectedSeats.length === 0) {
    selectedSeatsHolder.innerHTML =
      "<span class='noSelected'>No Seat Selected</span>";
    return;
  }

  selectedSeats.forEach((_seatIndex) => {
    const seatEl = document.createElement("span");
    seatEl.classList.add("selectedSeat");
    seatEl.innerText = `${_seatIndex + 1}`;
    selectedSeatsHolder.appendChild(seatEl);
  });

  numberOfSeatsEl.textContent = selectedSeats.length;
}

function updatePrice() {
  const total = selectedSeats.length * ticketPrice;
  totalPriceEl.textContent = `$ ${total}`;
}

//Add eventLsiter to continue Button

const contBtn = document.getElementById("proceedBtn");

contBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Oops no seat Selected");
  } else {
    const seatsWithSelectedCls = document.querySelectorAll(
      "#seatCont .seat.selected"
    );
    // console.log("seatsWithSelectedCls", seatsWithSelectedCls);
    seatsWithSelectedCls.forEach((_selectedSeat) => {
      _selectedSeat.classList.remove("selected");
      _selectedSeat.classList.add("occupied");
    });
    selectedSeatsHolder.innerHTML =
      "<span class='noSelected'>No Seat Selected</span>";
    numberOfSeatsEl.textContent = "0";
    totalPriceEl.textContent = `$ 0`;
    alert("Yayy! Your Seats have been booked");
  }
});

//Add eventListerner to Cancel Button
