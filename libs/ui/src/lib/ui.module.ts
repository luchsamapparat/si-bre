import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SpinnerConfig, SPINNER_CONFIG } from './spinner/spinner-config';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerEffects } from './state/spinner.effects';
import { reducer, SPINNER_FEATURE_KEY } from './state/spinner.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SPINNER_FEATURE_KEY, reducer),
    EffectsModule.forFeature([SpinnerEffects])
  ],
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    SpinnerComponent,
  ]
})
export class UiModule {

  static forFeature(spinnerConfigFactory: () => SpinnerConfig): ModuleWithProviders<UiModule> {
    return {
      ngModule: UiModule,
      providers: [
        {
          provide: SPINNER_CONFIG,
          useFactory: spinnerConfigFactory,
          multi: true
        }
      ]
    };
  }

}
