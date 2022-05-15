import { Component, OnInit } from '@angular/core';
import { pelicula } from '../estruc_peliculas';
import { peliculaService } from '../shared/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})


export class PeliculasComponent implements OnInit {
  misPeliculas: pelicula[] = [];
  casa:boolean = false;

  constructor(public miservicio: peliculaService) { 
    console.log('constructor de Peliculas');
  }

  ngOnInit(): void {
    console.log('ngOnInit de peliculas');
    this.misPeliculas = this.miservicio.getpeliculas();
    console.log(this.misPeliculas);
  }
  clasificar(x:string):boolean {
    if(x=="marvel"){
      return true;
    }else{
      return false;
    }
  }
}
