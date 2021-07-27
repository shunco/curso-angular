import { Component, OnInit , Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: any;


  @ViewChild('item', { static: false}) li: ElementRef<HTMLElement>; 

  private selected: boolean= false;



  constructor() { }

  ngOnInit() {


  }

  onClick(){

    this.selected= !this.selected;

    if(this.selected){
      this.li.nativeElement.style.backgroundColor='green';
    }else {
      this.li.nativeElement.style.backgroundColor='transparent';

    }

  }


  public isSelected():boolean{
    return this.selected;

  }





}
