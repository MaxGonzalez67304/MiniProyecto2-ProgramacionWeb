import { Component, OnInit } from '@angular/core';
import {parametros} from '../parametros';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  registros:parametros[]=[];
  heroe:string[]=[
    "aquaman.png",
    "batman.png",
    "daredevil.png",
    "hulk.png",
    "linterna-verde.png",
    "spiderman.png",
    "wolverine.png",
    "ironman.png",
    "capitan.png",
    "thor.png",
    "gambito.png",
    "deadpool.png",
    "dr_strange.png"
  ]

  constructor() {
    let aux=localStorage.getItem("registros");
    if(aux)this.registros=JSON.parse(aux);
   }

  ngOnInit(): void {
    this.MostrarLista();
  }

  MostrarLista(): void{
    let list = document.getElementById('tabla') as HTMLInputElement | null;
    let al=0;
    if(list){
      var aux =0;
      list.innerHTML="";
      let tabla="<thead class='thead-dark'><tr><th scope='col'>#</th><th>Registrados</th><th>Email</th><th>Sexo</th><th>Fecha de Nac.</th><th>Su Heroe</th></tr></thead><tbody>";
      for(var i in this.registros){
          let registro = this.registros[i];
          console.log(registro.name);
          aux++;
          al=Math.floor(Math.random()*13);
          console.log(registro.fn);
          
          tabla += "<tr><th scope='row'>"+aux+"</th><td>"+registro.name+"</td><td>"+registro.email+"</td><td>"+registro.sex+"</td><td>"+registro.fn+"</td><td><img src='assets/imagenes/"+this.heroe[al]+"' width='50px'></td></tr>";
      }
      list.innerHTML=tabla+"</tbody>";
    }
  }
}
