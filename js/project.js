const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll('.card-body')[1];

// UI Object Start
const ui = new UI();

// create Storage

const storage = new Storage();


// All Events Upload
eventListeners();

function eventListeners(){
  form.addEventListener("submit", addfilm);

  document.addEventListener('DOMContentLoaded', function() {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });

  cardBody.addEventListener("click", deleteFilm);

}

function addfilm(e){

  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if(title === "" || director === "" || url === ""){
    ui.displayMessages("Tüm alanların doldurulması zorunludur", "danger");

  } else {
    ui.displayMessages("Film başarı ile eklenmiştir", "success");
    // Create New Film
    const newFilm = new Film(title, director, url);

    storage.addFilmToStorage(newFilm);
    ui.addFilmToUI(newFilm); // Add film for UI
  }

  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e) {

  if(e.target.id === "delete-film") {

    ui.deleteFilmFromUI(e.target);

  }
  
}