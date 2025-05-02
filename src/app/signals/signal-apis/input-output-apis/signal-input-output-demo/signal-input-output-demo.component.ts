import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Movie } from '../../services/movies.service';

@Component({
  selector: 'app-signal-input-demo',
  standalone: true,
  imports: [MovieListComponent, FormsModule],
  templateUrl: './signal-input-output-demo.component.html',
  styleUrl: './signal-input-output-demo.component.scss'
})
export class SignalInputOutputDemoComponent {
  pageTitle = 'Signal Input, Output APIs Demo';

  filter = '';

  selectedMovie: Movie | null = null;
  getSelectedMovie(event: Movie) {
    console.log('Selected movie:', event);
    this.selectedMovie = event;

  }
  
}
