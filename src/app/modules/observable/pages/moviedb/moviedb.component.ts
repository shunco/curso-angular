import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoviesdbService } from '../../services/moviesdb.service'
import { Movie } from '../../../../models/movie';
import { map, mergeMap, switchMap, debounceTime, filter, tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-moviedb',
  templateUrl: './moviedb.component.html',
  styleUrls: ['./moviedb.component.css'],
  providers: [MoviesdbService]
})
export class MoviedbComponent implements OnInit {

  formItem: FormGroup = new FormGroup({
    query: new FormControl()
  })

  movies$: Observable<Movie[]>;
  query$: Observable<string>;


  constructor(private moviedbService: MoviesdbService) {

  }

  ngOnInit() {

    /*this.formItem.valueChanges.subscribe(item=> {
      console.log(item);
    });*/


    this.query$ = this.formItem.get('query').valueChanges;


    this.movies$ = this.query$.pipe(
      tap(query => console.log("antes", query)),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(query => console.log("debouceTime", query)),
      filter(query => {
        query = query.trim();
        return query !== '';
      }),
      tap(query => console.log("filter", query)),
      switchMap(query => {
        return this.getMovies(query);
      })
    );

  }


  public getMovies(query: string): Observable<Movie[]> {

    return this.moviedbService.getMovie(query).pipe(
      map((movies: Movie[]) => {

        movies.map(movie => {
          movie.poster_path = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
          return movie;
        })

        return movies;
      }))

      
  }




}
