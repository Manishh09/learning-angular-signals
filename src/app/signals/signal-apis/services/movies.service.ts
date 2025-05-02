import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesData: Movie[] = [
      { name: "Avengers", rating: 4.5, year: 2012 },
      { name: "Avengers: Age of Ultron", rating: 4.5, year: 2015 },
      { name: "Avengers: Infinity War", rating: 4.5, year: 2018 },
      { name: "Avengers: Endgame", rating: 4.5, year: 2019 },
      { name: "IronMan", rating: 4.5, year: 2008 },
      { name: "IronMan 2", rating: 4.5, year: 2010 },
      { name: "IronMan 3", rating: 4.5, year: 2013 },
      { name: "Thor", rating: 4.5, year: 2011 },
      { name: "Thor: The Dark World", rating: 4.5, year: 2013 },
      { name: "Thor: Ragnarok", rating: 4.5, year: 2017 },
      { name: "Thor: Love and Thunder", rating: 4.5, year: 2022 },
      { name: "Captain America: The First Avenger", rating: 4.5, year: 2011 },
      { name: "Captain America: The Winter Soldier", rating: 4.5, year: 2014 },
      { name: "Captain America: Civil War", rating: 4.5, year: 2016 },
      { name: "Black Widow", rating: 4.5, year: 2021 },
      { name: "Doctor Strange", rating: 4.5, year: 2016 },
      { name: "Doctor Strange in the Multiverse of Madness", rating: 4.5, year: 2022 },
      { name: "Wonder Woman", rating: 4.5, year: 2017 },


  ]

  movies = signal(this.moviesData)
}

export interface Movie {
  name: string,
  rating: number,
  year: number
}
