import { Component, EventEmitter, Output } from '@angular/core';
import { IMovie } from './movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieForm {
  movie: IMovie = { title: '', description: '', cover: '' };
  @Output() onMovieAdded: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  addMovieToList() {
    this.onMovieAdded.next(this.movie);
  }
}
