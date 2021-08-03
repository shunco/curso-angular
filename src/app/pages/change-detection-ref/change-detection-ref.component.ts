import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-change-detection-ref',
  templateUrl: './change-detection-ref.component.html',
  styleUrls: ['./change-detection-ref.component.css']
})
export class ChangeDetectionRefComponent implements OnInit, AfterViewInit {


  productos: any[] = [];

  @ViewChild('button', { static: false, read: ElementRef }) button: ElementRef<HTMLElement>;


  constructor(private detector: ChangeDetectorRef) {

  }

  ngOnInit() {



  }



  public add() {
    this.productos.push({
      id: this.productos.length
    })
  }

  public ngAfterViewInit() {

    this.detector.detach();

    fromEvent(this.button.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.add();
        }),
        debounceTime(1000)
      ).subscribe(event => {
        this.detector.detectChanges();
      });

  }


}
