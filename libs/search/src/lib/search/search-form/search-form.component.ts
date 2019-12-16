import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Search } from '../../search.model';

@Component({
  selector: 'si-bre-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output()
  search = new EventEmitter<Search>();

  form = this.formBuilder.group({
    vnr: ['vnr value'],
    rinr: ['rinr value'],
    breJahr: ['breJahr value'],
    pnr: ['pnr value']
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.search.emit(this.form.value);
  }

}
