import {Component, OnInit } from '@angular/core';
import {ContractDaoService}  from '../dao/contract.dao.service'
import {Contract} from '../model/contract';
import {ContractFormComponent} from './contract.form.component'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  lct:Contract[];
  openForm:boolean =false;
  constructor(private ctDao:ContractDaoService) { }

  ngOnInit() {
      this.ctDao.load(obj=>{
        this.lct=(obj as Contract[]);
      });
  }
  toogleForm() {
    this.openForm=!this.openForm;

  }
  save(value){
    console.log(value);
    this.toogleForm();

  }

}
