import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Details } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  load(pnr: string): Observable<Details> {
    console.log('Service')
    return of({
      pnr
    }).pipe(delay(5000));
  }
}
