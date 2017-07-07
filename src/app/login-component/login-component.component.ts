import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  formFirstSubmit: boolean = false;
  formProcessing: boolean = false;
  model: any;
  constructor(private router:Router) {
    this.model = {};
  }

  ngOnInit() {
  }



  onSubmit() {
    console.log("enter");
    this.router.navigate(['restarenttype']);
  }
}
