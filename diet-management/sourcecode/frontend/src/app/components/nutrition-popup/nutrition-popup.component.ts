import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-nutrition-popup',
  templateUrl: './nutrition-popup.component.html',
  styleUrls: ['./nutrition-popup.component.css']
})
export class NutritionPopupComponent implements OnInit {
  dataSource = [];
  title ='';
  displayedColumns: string[] = ['label', 'value'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.title = this.data['title']
    this.dataSource = this.data['nutrients']
  }

}
