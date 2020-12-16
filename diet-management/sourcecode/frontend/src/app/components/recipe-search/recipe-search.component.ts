import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { NutritionPopupComponent } from './../nutrition-popup/nutrition-popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  mealTypeSelected = false;
  recipesList:any = [];
  cusineType: string = '';
  mealType: string ='';
  dietLabel: string ='';
  recipeName='';
  excluded='';
  showLoader = false;

  @ViewChild('nutrition-data') nutritionTemplateRef;
  constructor(private recipeService: RecipeService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  handleOptionSelect() {
    this.mealTypeSelected = true;
  }

  resetOptions() {
    this.mealTypeSelected = false
  }

  getRecipeList() {
    this.showLoader = true;
    this.recipesList = []
    const params = {
      diet: this.dietLabel,
      mealType: this.mealType,
      cuisineType: this.cusineType
    }
    this.recipeService.getRecipeList(this.recipeName, params, this.excluded).subscribe((data) => {
      data['hits'].slice(0,6).map(recipes => {
        const recipe = recipes['recipe']
        const nutrients = Object.keys(recipe.totalNutrients).map(key => {
          return {
            label : recipe.totalNutrients[key].label,
            value: recipe.totalNutrients[key].quantity,
            unit:recipe.totalNutrients[key].unit
          }
        })
        const recipeObj = {
          name: recipe.label,
          image: recipe.image,
          ingredients: recipe.ingredientLines,
          nutrients:nutrients.slice(0, 10)
        }
        console.log(nutrients)
        this.recipesList.push(recipeObj)
      })
      this.showLoader = false;
    })
  }

  openNutritionDetails(recipe) {
    this.dialog.open(NutritionPopupComponent, {
      data: {
        title: recipe.name,
        nutrients: recipe.nutrients
       },
       width: '500px'
    });
  }

}
