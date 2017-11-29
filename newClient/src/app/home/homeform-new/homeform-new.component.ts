import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatePickerComponent} from 'ng2-date-picker';


@Component({
  selector: 'app-homeformnew',
  templateUrl: './homeform-new.component.html',
  styleUrls: ['./homeform-new.component.scss']
})
export class HomeformNewComponent implements OnInit {
  public step=1;
  public product: object={
      image:'',
      title: '',
    description:'',
    price:'',
    quantity:'',
    category:'',
    isauction:'',
    startdate:'',
    enddate:'',
    startprice:'',
    step:'',
    cardnumber:'',
    month:'',
    year:'',
    cvc:'',
    step1saved:false,
    step2saved:false,
    step3saved:false
  };

  
  constructor() { }

  ngOnInit() {}
  gotoPage(isNext){
    this.step+=(isNext)?1:-1;
    }
    savegeneral(product: object)
    {
    this.step++;
    this.product = product;
    this.product["step1saved"]=true;
     console.log(this.product);
    }
    saveprofile(product: object)
    {
    this.step++;
    this.product = product;
    this.product["step2saved"]=true;
     console.log(this.product);
    }
    savepayment(product: object)
    {
    this.product = product;
    this.product["step3saved"]=true;
     console.log(this.product);
    }
    finish(product: object)
    {
     this.step++;
     console.log(this.product);
    }
    } 
