// language.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private enSubject = new BehaviorSubject<boolean>(true);
  private deSubject = new BehaviorSubject<boolean>(false);

  en$ = this.enSubject.asObservable();
  de$ = this.deSubject.asObservable();

  toggleLanguage() {
    if (this.deSubject.value) {
      this.enSubject.next(true);
      this.deSubject.next(false);
    } else {
      this.enSubject.next(false);
      this.deSubject.next(true);
    }
  }
}
