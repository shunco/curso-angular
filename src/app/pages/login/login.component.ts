import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formItem: FormGroup = new FormGroup({
    username: new FormControl('cesar.cast.more@gmail.com', [Validators.nullValidator, Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.nullValidator, Validators.required]),
    remember: new FormControl(false)
  })


  is_valid_username$:Observable<string>;
  is_valid_password$:Observable<string>;

  constructor() { }

  ngOnInit() {

    this.formItem.get('remember').valueChanges.subscribe(value => {

      if (value) {

        this.formItem.patchValue({
          username: 'cesar.cast.more@gmail.com',
          password: 'cesar.cast.more'
        });

      } else {

        this.formItem.patchValue({
          username: null,
          password: null
        });
      }

    });

    this.is_valid_password$ = this.formItem.get('password').statusChanges;
    this.is_valid_username$ = this.formItem.get('username').statusChanges;







  }


  login() {

    let errors = this.formItem.get('username').errors;
    
  }

  cancel() {
    this.formItem.reset();
  }

}
