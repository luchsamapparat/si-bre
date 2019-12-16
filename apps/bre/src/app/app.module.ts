import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchModule } from '@si-bre/search';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SearchModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@si-bre/overview').then(m => m.OverviewModule)
      },
      {
        path: 'details',
        loadChildren: () => import('@si-bre/details').then(m => m.DetailsModule)
      }
    ]),
    StoreModule.forRoot({
      router: routerReducer
    }, {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
