import { Component, computed, EventEmitter, inject, Input, input, Output, output } from '@angular/core';
import { Movie, MoviesService } from '../../services/movies.service';
 
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  // // Tradition Input, Output using Decorators
  // @Input() filter: string = '';
  // @Output() selectedMovie = new EventEmitter<Movie>(); 




  // Alternative Input, Output using Signals API
  selectedMovie = output<Movie>(); // Output API
  filter = input<string>(''); // Input API

  moviesService = inject(MoviesService);

  // get movies from the service
  movies = this.moviesService.movies();

  // computed property to filter movies based on the input
  // this is a signal that will be updated when the filter changes
  filteredMovies = computed(() => this.movies.filter((movie: Movie) => movie.name.toLowerCase().startsWith(this.filter().toLowerCase())));

  // output signal to get the selected movie
  // method to handle the selected movie
  onMovieSelected(movie: Movie) {
    this.selectedMovie.emit(movie);
  }




}
