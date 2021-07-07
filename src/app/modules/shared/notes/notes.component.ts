import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() description;

  constructor() { }

  ngOnInit() {
  }

}
