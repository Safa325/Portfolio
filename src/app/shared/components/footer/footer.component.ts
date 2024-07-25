import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  en$ = this.languageService.en$;
  de$ = this.languageService.de$;
  
  constructor(private languageService: LanguageService) {
   
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
