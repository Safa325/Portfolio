import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PrivacyPolicyComponent } from './side-content/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    MainContentComponent,
    NavbarComponent,
    PrivacyPolicyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
