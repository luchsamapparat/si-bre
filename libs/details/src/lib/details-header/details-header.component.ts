import { Component, Input } from '@angular/core';
import { Details } from '../details.model';

@Component({
  selector: 'si-bre-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent {

  @Input()
  details: Details | null = null;

}
