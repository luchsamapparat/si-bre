import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Details } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  load(args: any): Observable<Details> {
    return of({});
  }
}
