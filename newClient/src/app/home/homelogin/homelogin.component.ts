import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.scss']
})
export class HomeloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log('hit');
  }
  HiFunction(){
    let greeting=alert("Welcome!");
    }
    Registration(e) {
      e.preventDefault();
      console.log(e);
      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;
     
      
      if(username == 'root' && password == 'root') {
        alert ('Hello!');
      }
      else {
        alert ('Error.Try again');
      }
    }

}
