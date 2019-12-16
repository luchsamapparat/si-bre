import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { DetailsComponent } from './details/details.component';
import { DetailsEffects } from './state/details.effects';
import { StoreModule } from '@ngrx/store';
import * as fromDetails from './state/details.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: DetailsComponent,
        data: { view: 'details' }
      }
    ]),
    EffectsModule.forFeature([DetailsEffects]),
    StoreModule.forFeature(
      fromDetails.DETAILS_FEATURE_KEY,
      fromDetails.reducer
    ),
    EffectsModule.forFeature([DetailsEffects])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {}
