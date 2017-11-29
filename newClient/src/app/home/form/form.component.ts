import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myArray=[
    {text:"Yorum"},
    {text:"Isum *"},
    {text:"E-posta *"},
    {text:"Internet sitesi"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
