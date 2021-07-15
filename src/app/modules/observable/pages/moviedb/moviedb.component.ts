import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-moviedb',
  templateUrl: './moviedb.component.html',
  styleUrls: ['./moviedb.component.css']
})
export class MoviedbComponent implements OnInit {

  formItem: FormGroup= new FormGroup({
    query: new FormControl()
  })

  constructor() { }

  ngOnInit() {

    /*this.formItem.valueChanges.subscribe(item=> {
      console.log(item);
    });*/

    this.formItem.get('query').valueChanges.subscribe(query=> {
      console.log(query);
    })
  }

}
