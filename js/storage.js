function Storage() {

}

Storage.prototype.addFilmToStorage = function(newFilm) {
  let films = this.getFilmsFromStorage();

  films.push(newFilm);

  localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function() {
  let films;

  if(localStorage.getItem('films') === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem('films'));
  }

  return films;
}

Storage.prototype.deleteFilmFromStorage = function(id) {

  const items = JSON.parse(localStorage.getItem('films'));
  const filtered = items.filter(item => item.id !== id);
  localStorage.setItem('films', JSON.stringify(filtered));
  
}