import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { DetailsComponent } from './details/details.component';
import { DetailsEffects } from './state/details.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DetailsComponent, data: { view: 'details' } }
    ]),
    EffectsModule.forFeature([
      DetailsEffects
    ])
  ],
  declarations: [
    DetailsComponent
  ]
})
export class DetailsModule {}
