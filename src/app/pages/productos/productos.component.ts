import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public category: string;

  constructor(private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {

    let queryParams: Observable<any> = this.activatedRoute.queryParams;

    let params: Observable<any> = this.activatedRoute.params;

    queryParams.subscribe(queryParams=> {
       this.category = queryParams.category;
       console.log(queryParams);
     });


  }

}
