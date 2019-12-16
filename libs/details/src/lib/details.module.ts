import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DetailsComponent }
    ])
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule {}
