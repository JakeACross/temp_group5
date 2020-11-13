import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  imports:[MatFormFieldModule,MatIconModule,MatInputModule, MatButtonModule, MatToolbarModule],
  exports: [MatFormFieldModule,MatIconModule,MatInputModule, MatButtonModule, MatToolbarModule]
})

export class MaterialModule {}
