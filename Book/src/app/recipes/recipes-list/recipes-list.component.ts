import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 2','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor(){

  }
  ngOnInit(): void {  }
  onRecipeSelected(recipe :Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
