import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef } from '@angular/core';

import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {

  @ViewChild('dynamic', { static: true, read: ViewContainerRef }) dynamic: ViewContainerRef;



  constructor(private factory: ComponentFactoryResolver) {

  }

  ngOnInit() {


  }


  addComponent(){
    let  dynamicComponent = this.factory.resolveComponentFactory(Card1Component);
    let component = this.dynamic.createComponent(dynamicComponent);
    component.instance.atributo1='Cesar';
    


  }

  addComponent2(){
    this.dynamic.clear();
    
    let  dynamicComponent = this.factory.resolveComponentFactory(Card2Component);
    let component = this.dynamic.createComponent(dynamicComponent);


  }


}
