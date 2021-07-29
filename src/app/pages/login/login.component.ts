import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }


  login(){
    console.log(this.formItem.valid);
  }

  cancel(){
    this.formItem.reset();
  }

}
