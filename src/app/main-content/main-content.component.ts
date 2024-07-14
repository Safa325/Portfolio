import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbouMeComponent } from './abou-me/abou-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AbouMeComponent,
    SkillsComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
