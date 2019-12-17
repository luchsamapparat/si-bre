import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@si-bre/ui';
import { DetailsHeaderComponent } from './details-header/details-header.component';
import { DetailsComponent } from './details/details.component';
import { detailsLoaded, navigatedToDetails } from './state/details.actions';
import { DetailsEffects } from './state/details.effects';
import { DETAILS_FEATURE_KEY, reducer } from './state/details.reducer';

export function spinnerConfigFactory() {
  return {
    foo: {
      startActions: [navigatedToDetails],
      endActions: [detailsLoaded]
    }
  };
}

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
    EffectsModule.forFeature([
      DetailsEffects
    ]),
    StoreModule.forFeature(
      DETAILS_FEATURE_KEY,
      reducer
    ),
    EffectsModule.forFeature([DetailsEffects]),
    UiModule.forFeature(spinnerConfigFactory)
  ],
  declarations: [DetailsComponent, DetailsHeaderComponent]
})
export class DetailsModule {}
