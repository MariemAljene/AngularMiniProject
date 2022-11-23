import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {Emploi} from "../model/Emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  Emploi:Emploi[] =[
    {reference: "U9V87", titre: "Directeur", entreprise: "BFI Group", etat: true},
    {reference: "XiFt88T", titre: "Employee", entreprise: "Esprit ", etat: false},
    {reference: "FP8G34", titre: "Stagiaire", entreprise: "Esprit", etat: false}
  ]
  total=0;
  search="vide";
  constructor() { }

  ngOnInit(): void {
  }
  TotalEmploiNonCloture(total :any)
  {
    this.total++

  }
  Postuler(i:any)
  {
    this.Emploi[i].etat==false
  }
}
