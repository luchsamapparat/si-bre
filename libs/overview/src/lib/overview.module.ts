import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OverviewComponent }
    ])
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverviewModule {}
