import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  @Input() product:object;
  
  @Output() generalSaved=new EventEmitter();
  file:File;
  public imageloaded=false;
    constructor() {
    }
  
    ngOnInit() {
    }
    getFile(event)
    {
      this.file=event.target.files[0];
      this.product["image"]=this.file.name;
      this.imageloaded=true;
    }
  savegeneral() {
    this.generalSaved.emit(this.product);
  }
  }
