import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public user: BehaviorSubject<any>;
  private url: string = environment.api + "login";

  constructor(private http: HttpClient, private router: Router) {

    this.user = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));

  }

  /*
   {username: username,
    password: password }
  */

  public login(username: string, password: string): Observable<any> {

    return this.http.post<any>(this.url, {
      username, password
    }).pipe(
      tap(respuesta => {


        if (respuesta.success) {
          this.user.next({ email: username, token: respuesta.token });
          
          localStorage.setItem('user', JSON.stringify({
            username, token: respuesta.token
          }));


        }
      })

    );

  }


  public logout(){
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigate(['/external_component']);
  }






}