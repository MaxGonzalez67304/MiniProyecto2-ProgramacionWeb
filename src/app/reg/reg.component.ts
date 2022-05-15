import { Component, OnInit } from '@angular/core';
import {parametros} from '../parametros';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})

export class RegComponent implements OnInit {

  registros: parametros[] = [];
  title = 'formreactivos';
  usuario: any = {
    correo: '',
  };

  forma!: FormGroup;

  constructor() {
    this.forma = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    });
    this.forma.setValue(this.usuario);
  }

  ngOnInit(): void {
  }

  registrar(): void {
    let name = document.getElementById('name') as HTMLInputElement | null;
    let email = document.getElementById('email') as HTMLInputElement | null;
    let fn = document.getElementById('fn') as HTMLInputElement | null;
    let sex = document.getElementById('sex') as HTMLInputElement | null;

    if(name?.value && email?.value && fn?.value && sex?.value){
      let aux=localStorage.getItem("registros");
      if(aux)this.registros=JSON.parse(aux);
      this.registros.push({name: name.value, email: email.value,sex: sex.value, fn:fn.value});
      localStorage.setItem("registros",JSON.stringify(this.registros));
      name.value="";email.value="";fn.value="",sex.value="";
    }else{}
  }
}
