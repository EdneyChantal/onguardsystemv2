import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Rx' 

@Component({
  selector: 'app-portaria',
  templateUrl: './portaria.component.html',
  styleUrls: ['./portaria.component.css']
})
export class PortariaComponent implements OnInit {
  time:string;
  extime:Observable<number>;
  constructor() { }

  ngOnInit() {
     this.extime = Observable.timer(1000,1000);
     this.extime.subscribe(t=>this.time=new Date().toTimeString());
     

  }

}
