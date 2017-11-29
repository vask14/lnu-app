import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit { @Input() product:object;
  
  @Output() detailsSaved=new EventEmitter();
  
    constructor() {
    }
  
    ngOnInit() {
      
    }
  saveprofile() {
    this.detailsSaved.emit(this.product);
  }
  
  }