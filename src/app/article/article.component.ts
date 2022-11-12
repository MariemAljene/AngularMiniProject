import { Component, OnInit } from '@angular/core';
import {article} from "../model/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
titre="Les articles du jour"
  listeArticles:article[]=
    [

      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
      {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.filterByCategory('root')

  }
  filterByCategory(category :any){
    this.listeArticles = this.listeArticles.filter(article => article.categorie == category)
  }

}
