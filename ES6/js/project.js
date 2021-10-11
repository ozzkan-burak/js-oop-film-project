const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll('.card-body')[1];
const deleteAllFilms = document.getElementById('clear-films');

// All Events Upload
eventListeners();

function eventListeners(){
  form.addEventListener("submit", addfilm);

  document.addEventListener('DOMContentLoaded', function() {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });

  cardBody.addEventListener("click", deleteFilm);

  deleteAllFilms.addEventListener("click", deleteAll);

}

function addfilm(e){

  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  const id = uuidv4();

  if(title === "" || director === "" || url === ""){
    UI.displayMessages("Tüm alanların doldurulması zorunludur", "danger");

  } else {
    UI.displayMessages("Film başarı ile eklenmiştir", "success");

    // Create New Film
    const newFilm = new Film(title, director, url, id);

    Storage.addFilmToStorage(newFilm);
    UI.addFilmToUI(newFilm); // Add film for UI
  }

  UI.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
};

function deleteFilm(e) {

  if(e.target.id === "delete-film") {

    UI.deleteFilmFromUI(e.target);

  }
};


function deleteAll() {

  const deleteID = document.querySelector('#films');
  UI.deleteAllFilmFromUI(deleteID);
  UI.displayMessages("Listenizi zenginleştirin, yeni filmler ekleyin.", "warning");

  Storage.deleteAllFilmFromStorage();
};