import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }


  public setMessage(message: string): void {
    this.message = message;
  }

}
