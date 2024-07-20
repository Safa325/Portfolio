import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

isMenuHidden: boolean = false;
menuBurgerOpen: boolean = false;
closeAnimation: boolean = false;
en$ = this.languageService.en$;
de$ = this.languageService.de$;

constructor(private languageService: LanguageService) {
  this.checkInnertWidth(innerWidth)
}

@HostListener('window:resize', ['$event.target.innerWidth'])
onResize(width: number) {
  this.checkInnertWidth(width)
}

selectLanguage(){
  this.languageService.toggleLanguage();
}



checkInnertWidth(width:number){
  if(!this.menuBurgerOpen){
    this.isMenuHidden = width <= 750;
  }
  if (width > 750){
    this.menuBurgerOpen = false
  }
}

showMenu(){
  this.isMenuHidden = false
  this.menuBurgerOpen = true
}

closeMenu(){
this.closeAnimation = true
  this.reset()
}

reset(){
  setTimeout(() => {
    this.isMenuHidden = true
    this.menuBurgerOpen = false
    this.closeAnimation = false
    }, 300);
}

}
