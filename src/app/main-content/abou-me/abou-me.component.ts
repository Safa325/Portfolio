import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-abou-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abou-me.component.html',
  styleUrl: './abou-me.component.scss'
})
export class AbouMeComponent {
  en$ = this.languageService.en$;
  de$ = this.languageService.de$;

  constructor(private languageService: LanguageService){}

}
  