import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbouMeComponent } from './abou-me/abou-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AbouMeComponent,
    SkillsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
