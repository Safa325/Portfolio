import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  en$ = this.languageService.en$;
  de$ = this.languageService.de$;
  
  constructor(private languageService: LanguageService) {
   
  }


}
