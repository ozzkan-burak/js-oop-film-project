const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Object Start
const ui = new UI();

// All Events Upload
eventListeners();

function eventListeners(){
  form.addEventListener("submit", addfilm);
}

function addfilm(e){

  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if(title === "" || director === "" || url === ""){
    alert("Tüm alanların doldurulması zorunludur");
    return false;

  } else {

    // Create New Film
    const newFilm = new Film(title, director, url);

    ui.addFilmToUI(newFilm); // Add film for UI
  }

  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}