import { Component, OnInit } from '@angular/core';
import { RecipeService } from './../../services/recipe.service';

@Component({
  selector: 'app-nutrition-analysis',
  templateUrl: './nutrition-analysis.component.html',
  styleUrls: ['./nutrition-analysis.component.css']
})
export class NutritionAnalysisComponent implements OnInit {
  public showLoader: boolean = false
  public ingredientName: string = ''
  public nutrientInfo = {};
  displayedColumns: string[] = ['label', 'value'];
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  getNutritionDetail() {
    this.showLoader = true
    this.recipeService.getNutritionDetail(this.ingredientName).subscribe(data => {
     this.nutrientInfo['totalWeight'] = data['totalWeight']
     this.nutrientInfo['calories'] = data['calories']
     this.nutrientInfo['nutrients'] = Object.keys(data['totalNutrients']).map(key => {
      return {
        label : data['totalNutrients'][key].label,
        value: data['totalNutrients'][key].quantity,
        unit:data['totalNutrients'][key].unit
      }
      }).slice(0,10)
      this.showLoader = false
    })
  }

}
