import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  en$ = this.languageService.en$;
  de$ = this.languageService.de$;
  
  constructor(private languageService: LanguageService) {
   
  } 

}
