const info = document.getElementById("info");
const films = document.getElementById("films");

const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Виктор Шамиров",
    career: "Режиссёр, Сценарист, Актёр, Продюсер, Монтажёр",
    films: "https://www.film.ru/person/viktor-shamirov",
    top_rated_film: "Большая секунда",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

addInfo();
addFilms();

function addInfo() {
  directors.forEach((item) => {
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "info-wrapper";
    info.appendChild(infoWrapper);

    const name = document.createElement("div");
    name.className = "name";
    name.innerHTML = `${directors.indexOf(item) + 1}. ${item.name}`;
    infoWrapper.appendChild(name);

    const career = document.createElement("div");
    career.className = "career";
    career.innerHTML = `${item.career}`;
    infoWrapper.appendChild(career);

    const filmography = document.createElement("div");
    filmography.className = "filmography";
    filmography.innerHTML = `<a href="${item.films}" target="_blank" class="filmography-link">Фильмография</a>`;
    infoWrapper.appendChild(filmography);
  });
}

function addFilms() {
  const topFilmsList = [];

  directors.forEach((item) => {
    topFilmsList.push(item.top_rated_film);
    console.log(topFilmsList);
  });

  const topFilms = document.createElement("div");
  topFilms.className = "top-films";
  topFilms.innerHTML = topFilmsList.join(", ");
  films.appendChild(topFilms);
}
