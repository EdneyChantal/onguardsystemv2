import {Component, OnInit } from '@angular/core';
import {ContractDaoService}  from '../dao/contract.dao.service'
import {Contract} from '../model/contract';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ContractFormComponent} from './contract.form.component'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  lct:Contract[];
  constructor(private ctDao:ContractDaoService,private modalService: NgbModal ) { }

  ngOnInit() {
      this.ctDao.load(obj=>{
        this.lct=(obj as Contract[]);
      });
  }
  open(){
    console.log('fez');
     const modalRef = this.modalService.open(ContractFormComponent);
     
    // modalRef.componentInstance.name = 'World';

  }
}
