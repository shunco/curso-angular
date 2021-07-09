import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public usuario_id: string;

  constructor(private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {

    this.usuario_id = this.activatedRoute.snapshot.params.usuario_id;
    
  }

}
