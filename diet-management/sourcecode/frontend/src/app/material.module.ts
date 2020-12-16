import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports:[MatFormFieldModule,MatTableModule,MatDialogModule,MatSelectModule,MatCardModule,MatTabsModule,MatIconModule,MatCheckboxModule,MatInputModule, MatButtonModule,MatListModule, MatToolbarModule,MatDividerModule, MatSidenavModule],
  exports: [MatFormFieldModule,MatDialogModule,MatTableModule,MatSelectModule,MatCardModule, MatTabsModule,MatIconModule,MatCheckboxModule,MatInputModule, MatButtonModule, MatListModule,MatToolbarModule, MatSidenavModule, MatDividerModule]
})

export class MaterialModule {}
