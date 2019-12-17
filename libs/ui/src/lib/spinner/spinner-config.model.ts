import { InjectionToken } from '@angular/core';
import { ActionCreator } from '@ngrx/store';

export const SPINNER_CONFIG = new InjectionToken('SPINNER_CONFIG');

export interface SpinnerConfig {
  [spinnerName: string]: {
    startActions: ActionCreator[];
    endActions: ActionCreator[];
  }
}
