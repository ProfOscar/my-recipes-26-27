import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  // Provvisoriamente scrivo nel codice una lista di ricette di test
  recipes: RecipeModel[] = [
    {
      "name": "Spaghetti alla chitarra",
      "desc": "Gli spaghetti alla chitarra (noti anche come maccheroni alla chitarra) sono un formato di pasta fresca all'uovo tipico della cucina abruzzese, caratterizzato da una sezione quadrata e uno spessore di circa 2-3 mm.",
      "imgPath": "https://images.lacucinaitaliana.it/wp-content/uploads/2017/02/Maccheroni-alla-chitarra.jpg",
      "ingredients": [
        {
          "name": "Semola di grano duro",
          "amount": 400
        },
        {
          "name": "Uova",
          "amount": 4
        }
      ]
    },
    {
      "name": "Lasagne alla bolognese",
      "desc": "Le lasagne alla bolognese sono un primo piatto tipico della cucina emiliana, in particolare della città di Bologna, composto da strati alternati di sfoglia verde all'uovo (con spinaci), ragù classico bolognese, salsa besciamella e formaggio parmigiano reggiano grattugiato.",
      "imgPath": "https://www.cucinare.it/uploads/wp-content/uploads/2015/05/pasta_alla_bolognese.webp",
      "ingredients": [
        {
          "name": "Farina",
          "amount": 300
        },
        {
          "name": "Uova",
          "amount": 2
        },
        {
          "name": "spinaci",
          "amount": 100
        }
      ]
    },
    {
      "name": "Brasato al barolo",
      "desc": "Il brasato al barolo è un secondo piatto di carne tipico della cucina piemontese, considerato uno dei grandi classici della gastronomia italiana. Si tratta di uno stufato di carne di manzo cotto a fuoco lentissimo per molte ore nel vino Barolo, insieme a verdure aromi e spezie.",
      "imgPath": "https://www.giallozafferano.it/images/182-18287/Brasato-al-Barolo_650x433_wm.jpg",
      "ingredients": [
        {
          "name": "Manzo",
          "amount": 1.2
        },
        {
          "name": "Barolo",
          "amount": 750
        },
        {
          "name": "Cipolla",
          "amount": 1
        },
        {
          "name": "Carota",
          "amount": 2
        }
      ]
    },
    {
      "name": "Tiramisu",
      "desc": "Il tiramisù è il dolce al cucchiaio più famoso e diffuso della pasticceria italiana, composto da strati di biscotti savoiardi inzuppati nel caffè espresso e alternati a una ricca crema a base di mascarpone, uova e zucchero, il tutto completato da una spolverata superficiale di cacao amaro in polvere.",
      "imgPath": "https://www.giallozafferano.it/images/237-23742/Tiramisu_650x433_wm.jpg",
      "ingredients": [
        {
          "name": "Mascarpone",
          "amount": 500
        },
        {
          "name": "Savoiardi",
          "amount": 400
        },
        {
          "name": "Uova",
          "amount": 4
        },
        {
          "name": "Zucchero",
          "amount": 100
        }
      ]
    }
  ]

  onItemClick(item: RecipeModel) {
    this.recipeSelected.emit(item);
  }
}
