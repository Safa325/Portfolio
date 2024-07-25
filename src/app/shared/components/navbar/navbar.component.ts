// import { CommonModule } from '@angular/common';
// import { Component, HostListener } from '@angular/core';
// import { LanguageService } from '../../../language.service';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })

// export class NavbarComponent {

// isMenuHidden: boolean = false;
// menuBurgerOpen: boolean = false;
// closeAnimation: boolean = false;
// en$ = this.languageService.en$;
// de$ = this.languageService.de$;

// constructor(private languageService: LanguageService) {
//   this.checkInnertWidth(innerWidth)
// }

// @HostListener('window:resize', ['$event.target.innerWidth'])
// onResize(width: number) {
//   this.checkInnertWidth(width)
// }

// selectLanguage(){
//   this.languageService.toggleLanguage();
// }



// checkInnertWidth(width:number){
//   if(!this.menuBurgerOpen){
//     this.isMenuHidden = width <= 750;
//   }
//   if (width > 750){
//     this.menuBurgerOpen = false
//   }
// }

// showMenu(){
//   this.isMenuHidden = false
//   this.menuBurgerOpen = true
// }

// closeMenu(){
// this.closeAnimation = true
//   this.reset()
// }

// reset(){
//   setTimeout(() => {
//     this.isMenuHidden = true
//     this.menuBurgerOpen = false
//     this.closeAnimation = false
//     }, 300);
// }

// }

import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../../language.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  useHashLinks: boolean = true;
  isMenuHidden: boolean = false;
  menuBurgerOpen: boolean = false;
  closeAnimation: boolean = false;
  en$ = this.languageService.en$;
  de$ = this.languageService.de$;
  isSpecialRoute: boolean = false;

  constructor(private languageService: LanguageService, private router: Router) {
    this.checkInnerWidth(window.innerWidth);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Setze useHashLinks auf true, wenn die URL die Hauptseite ist, sonst false
        this.useHashLinks = this.router.url === '/' || this.router.url.startsWith('/#');
      }
    });
  }

  navigateToSection(sectionId: string) {
    if (this.router.url === '/' || this.router.url === '/#/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.checkInnerWidth(width);
  }

  selectLanguage() {
    this.languageService.toggleLanguage();
  }

  checkInnerWidth(width: number) {
    if (!this.menuBurgerOpen) {
      this.isMenuHidden = width <= 750;
    }
    if (width > 750) {
      this.menuBurgerOpen = false;
    }
  }

  showMenu() {
    this.isMenuHidden = false;
    this.menuBurgerOpen = true;
  }

  closeMenu() {
    this.closeAnimation = true;
    this.reset();
  }

  reset() {
    setTimeout(() => {
      this.isMenuHidden = true;
      this.menuBurgerOpen = false;
      this.closeAnimation = false;
    }, 300);
  }
}
