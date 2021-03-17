import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Observable,from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { interval } from 'rxjs';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private produitService : ProduitService) { }

  //observable1$ : Observable<string>;
  observable4$ : Observable<any> = null;
  observable5$ : Observable<any> = null;

  tabproduit : Array<any> = [];

  //tabData : Array<String> = [];
  subscribe : any;

  ngOnInit(): void {

    this.observable4$ = from ([
      {"titre":"voiture","prix":10000},
      {"titre":"smartphone","prix":500},
      {"titre":"verre","prix":3},
      {"titre":"essence","prix":100},
      {"titre":"yaourt","prix":3},
      {"titre":"alcool","prix":15},
      {"titre":"guitare","prix":100},
      {"titre":"livres","prix":20},
      {"titre":"habits","prix":15},
      {"titre":"bouteille de vin","prix":20}
    ]
    ); 
    
    // this.observable4$.subscribe (filter (guitare => guitare.prix > 200  )).subscribe (guitare => {this.tabproduit.push (guitare)});

  }
  onClick () {
    this.produitService.log ("click catalogue")
  }

 onClickBackend () {
    this.observable5$ = this.produitService.getCatalogue ();
  }

}