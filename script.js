const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount*ticketPrice; 
}

let ticketPrice = +movieSelect.value; // change to number

//Movie select event
movieSelect.addEventListener('click', e => {
  ticketPrice = +e.target.value
})

//Seat click event
container.addEventListener('click', e => {
  if(e.target.classList.contains('seat')  && !e.target.classList.contains('occupied')) {
    
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});