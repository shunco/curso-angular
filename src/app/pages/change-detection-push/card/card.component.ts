import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Card } from '../change-detection-push.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {


  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }


  print(){
    console.log("renderizando component" + this.card.id);
  }
}
