import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { NutritionAnalysisComponent } from './components/nutrition-analysis/nutrition-analysis.component';
import { YoutubeSearchComponent } from './components/youtube-search/youtube-search.component';
import { NutritionPopupComponent } from './components/nutrition-popup/nutrition-popup.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    RecipeSearchComponent,
    NutritionAnalysisComponent,
    YoutubeSearchComponent,
    NutritionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  entryComponents:[NutritionPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
