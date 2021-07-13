import { Component, OnInit } from '@angular/core';
import { Observable , Subscription} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {



  sydney$: Observable<number>;
  sydney: number;


  melbourne$: Observable<number>;


  lithgow$: Observable<number>;
  lithgow: number;

  darvin$: Observable<number>;


  mexico_city$: Observable<number>;
  mexico_city: number;
  subscription: Subscription;



  monterrey$: Observable<number>;
  monterrey: number;

  constructor() {

  }

  ngOnInit() {

    this.sydney$ = this.getObservable();
    this.sydney$.subscribe(weather => {
      this.sydney = weather;
    })


    this.melbourne$ = this.getObservable();


    this.lithgow$ = this.getObservableTime();
    this.lithgow$.subscribe(weather => {
      this.lithgow = weather;
    });

    this.darvin$ = this.getObservableTime();



    this.mexico_city$ = this.getObservableTime();
    this.subscription = this.mexico_city$.subscribe(weather => {
      this.mexico_city = weather;
    });

    setTimeout(()=> {
      this.subscription.unsubscribe();
    }, 5000);


    this.monterrey$ = this.getObservableError();
    this.monterrey$.subscribe(weather => {
      this.monterrey = weather;
    }, error=> {
      console.log(error)
    }, ()=> {
      console.log("termine");
    });





  }


  public getObservable(): Observable<number> {

    return Observable.create(observer => {
      observer.next(this.getRandom());
      observer.complete();
    })

  }

  public getObservableTime(): Observable<number> {

    return Observable.create(observer => {

      observer.next(this.getRandom());

      setTimeout(() => {
        observer.next(this.getRandom());
      }, 4000);

      setTimeout(() => {
        observer.next(this.getRandom());
      }, 6000);


      setTimeout(() => {
        observer.next(this.getRandom());
        observer.complete();
      }, 8000);

    })

  }


  public getObservableError(): Observable<number> {

    return Observable.create(observer => {

      observer.next(this.getRandom());

      setTimeout(() => {
        observer.next(this.getRandom());
      }, 4000);

      setTimeout(() => {
        observer.error('Hubo un error');
      }, 6000);


      setTimeout(() => {
        observer.next(this.getRandom());
        observer.complete();
      }, 8000);

    })

  }


  public getRandom(): number {
    return Math.floor(Math.random() * (40 - 5)) + 5;
  }




}
