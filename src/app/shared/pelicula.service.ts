import { Injectable } from '@angular/core';
import {pelicula} from '../estruc_peliculas';
import {peliculas} from '../peliculas';

@Injectable({
  providedIn: 'root'
})
export class peliculaService {

  private peliculas: pelicula[] = peliculas;

  constructor() { }

  getpeliculas(): pelicula[] {
    return this.peliculas;
  }

  getUnapelicula(posicion: number): pelicula {
    return this.peliculas[posicion];
  }

  searchUnapelicula(nompelicula: string):number{
    let index = this.peliculas.findIndex(p => p.nombre === nompelicula);
    return index;
  } 
}
