import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notif$: Subject<Message> = new Subject<Message>();

  constructor() {

  }


  public notify(message: Message): void {
    this.notif$.next(message);
  }

  public getNotifObservable(): Observable<Message> {
    return this.notif$.asObservable();

  };



}
