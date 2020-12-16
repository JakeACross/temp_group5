import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public RECIPE_URL = 'https://api.edamam.com/search?';
  public NUTRITION_URL = 'https://api.edamam.com/api/nutrition-data?';

  constructor(private http:HttpClient) { }

  getRecipeList(searchTerm, params, excluded) {
    let queryParamUrl = '&'
    Object.keys(params).forEach((key) => {
      if (key ==='diet' && params[key]) {
        queryParamUrl +=`${key}=${params[key]}&`
      }
    })
    if (excluded) {
      queryParamUrl += `excluded=${excluded}&`
    }
    console.log(queryParamUrl)

    return this.http.get(`${this.RECIPE_URL}q=${searchTerm}&app_id=${environment.RECIPE_SEARCH_APP_ID}&app_key=${environment.RECIPE_SEARCH_APP_KEY}${queryParamUrl}ingr=5`)
  }

  getNutritionDetail(ingredientName) {
    return this.http.get(`${this.NUTRITION_URL}app_id=${environment.NUTRITION_APP_ID}&app_key=${environment.NUTRITION_APP_KEY}&ingr=${ingredientName}`)
  }
  
}
