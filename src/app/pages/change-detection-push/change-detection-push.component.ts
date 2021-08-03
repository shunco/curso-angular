import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-push',
  templateUrl: './change-detection-push.component.html',
  styleUrls: ['./change-detection-push.component.css']
})
export class ChangeDetectionPushComponent implements OnInit {


  card1: Card = {
    header: 'Header 1',
    body: 'Body 1',
    footer: 'Footter 1',
    id: 1
  };

  card2: Card = {
    header: 'Header 2',
    body: 'Body 2',
    footer: 'Footter 2',
    id: 2
  }

  constructor() {

  }

  ngOnInit() {

    setTimeout(()=> {
      console.log("colocando titulo 1");
      //this.card1.header = 'Titulo 1'; Es valor es para ChangeDetectionStrategy.Default
      this.card1 = {...this.card1, header: 'Titulo 1'};



    }, 1000);


    setTimeout(()=> {
      console.log("colocando titulo 2");
      //this.card2.header = 'Titulo 2';
      this.card2 = {...this.card2, header: 'Titulo 2'};



    }, 2000);



    setTimeout(()=> {
      console.log("colocando cuerpo 11");
      //this.card1.body = 'Cuerpo 1';
      this.card1 = {...this.card1, body: 'Cuerpo 1',  footer: 'Terminado 1'};

    }, 3000);
  

  }

  

}


export interface Card {
  header: string;
  body: string;
  footer: string;
  id: number;
}
