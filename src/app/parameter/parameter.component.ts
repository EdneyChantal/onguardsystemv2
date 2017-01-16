import { Component, OnInit } from '@angular/core';
import {ParamDaoService} from '../dao/param.dao.service'
import {Parameter} from '../model/param';
import {Router}  from '@angular/router'

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  oparam:Parameter=new Parameter();
  erro:string = '';
  constructor(private pdao:ParamDaoService,private router:Router) { }

  ngOnInit() {
    this.pdao.load(obj=>{
        this.oparam=(obj as Parameter);
      });


  }
  onSubmit() {
         this.pdao.insertContract(this.oparam,()=>this.router.navigate['/menu'],(err=>this.erro=err));

  }

}
