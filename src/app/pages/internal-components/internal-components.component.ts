import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-internal-components',
  templateUrl: './internal-components.component.html',
  styleUrls: ['./internal-components.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InternalComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
