import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Rx';
import {ContractDaoService} from '../dao/contract.dao.service';
import {Contract} from '../model/contract';
import {PhasesVision} from '../model/phasesVision';

@Component({
  selector: 'app-portaria',
  templateUrl: './portaria.component.html',
  styleUrls: ['./portaria.component.css']
})


export class PortariaComponent implements OnInit {
  time:string;
  extime:Observable<number>;
  contracts:Contract[];
  fase:PhasesVision = new PhasesVision();
  constructor(private contractDao:ContractDaoService) { }

  ngOnInit() {
     this.extime = Observable.timer(1000,1000);
     this.extime.subscribe(t=>this.time=new Date().toTimeString());
     this.contractDao.load(obj=>this.contracts=obj);
  }

}
