export interface IFilm {
  genreIds: string[];
  name: string;
  ratings: {
    ratingValue: number;
    raterName: string;
  }[];
  filmImage: string;
  _id: string;
}

export interface IFilmWithGenres extends IFilm {
  genres: {
    _id: string;
    name: string;
  }[];
}
