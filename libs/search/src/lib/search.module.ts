import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchFormComponent,
    SearchComponent
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule {}
