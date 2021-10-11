class Storage {



  static addFilmToStorage (newFilm) {
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage () {
    let films;

    if(localStorage.getItem('films') === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem('films'));
    }

    return films;
  }

  static deleteFilmFromStorage (id) {

    const items = JSON.parse(localStorage.getItem('films'));

    const filtered = items.filter(item => item.id !== id);

    localStorage.setItem('films', JSON.stringify(filtered));

  }

  static deleteAllFilmFromStorage () {
    localStorage.removeItem('films');
}

}