import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public user: Subject<any> = new Subject<any>();






  private url: string = environment.api + "login";

  constructor(private http: HttpClient) {


  }

  public login(username: string, password: string): Observable<any> {

    return this.http.post<any>(this.url, {
      username, password
    }).pipe(
      tap(respuesta => {

        if (respuesta.success) {
          this.user.next({ email: username, token: respuesta.token })
        }
      })

    );

  }






}