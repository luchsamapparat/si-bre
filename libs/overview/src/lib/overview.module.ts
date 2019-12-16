import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { OverviewComponent } from './overview/overview.component';
import { OverviewEffects } from './state/overview.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OverviewComponent, data: { view: 'overview' } }
    ]),
    EffectsModule.forFeature([
      OverviewEffects
    ])
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverviewModule {}
