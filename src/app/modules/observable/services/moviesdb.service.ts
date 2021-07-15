import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie} from '../../../models/movie';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesdbService {


  private api_key: string = '270d9e4ef3fca25ea83fb808c43cbb9d';
  private url: string = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {

   }


   public getMovie(query: string): Observable<Movie[]>{

     let params: HttpParams = new HttpParams().append('query', query);

     return this.http.get<Movie[]>(this.url, { params}).pipe(
       map((response: any)=>{
         return response.results;
       })
     );



   }

   
}
