import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nombreh: string = "";
  msj: string = "";
  indice: number = 0;
  miheroe: Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  };


  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router ) { 
    this.activatedRoute.params.subscribe(params => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice != -1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }else {    
        setTimeout(() => {
          this.router.navigate(['/', 'home']);
        }, 4000);
      }
    });

  }

  ngOnInit(): void {
  }

}
