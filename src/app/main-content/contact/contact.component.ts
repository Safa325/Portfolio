import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';
import { PopUpComponent } from './dialog/pop-up/pop-up.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    PopUpComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('formElement') formElement?: ElementRef<HTMLFormElement>;

  http = inject(HttpClient)

  policyAccepted: boolean = false;
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    policy: [false, Validators.requiredTrue]
  });
  isSubmitted = false;
  showMessage = false;
  post = {
    endPoint: 'https://www.shamarisafa.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  en$ = this.languageService.en$;
  de$ = this.languageService.de$;

  
  constructor(private fb: FormBuilder, private router: Router, private languageService: LanguageService) { }

  onSubmit() {
    if(this.policyAccepted === true){
      this.isSubmitted = true;
    if (this.registerForm.valid) {
      this.isSubmitted = false;
      this.http.post(this.post.endPoint, this.post.body(this.registerForm.value))
        .subscribe({
          next: (response) => {
            this.registerForm.reset();
            this.showMessageFc();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else {
      console.error('Form is invalid');
    }
  }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  showMessageFc() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 1000);
  }

  errorFc(id: string) {
    const control = this.registerForm.get(id);
    return control && control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  errorFcMessage(id: string) {
    const control = this.registerForm.get(id);
    return control && control.hasError('required') && (control.dirty || control.touched || this.isSubmitted);
  }

  succesFcMessage(id: string) {
    const control = this.registerForm.get(id);
    return control && !control.invalid && (control.dirty || control.touched || this.isSubmitted);
  }

  toggleSubmitState() {
    this.policyAccepted = !this.policyAccepted;
    if (this.policyAccepted) {
      this.hidePolicyMessage();
    }
  }

  showPolicyMessage() {
    const policyMessage = document.getElementById('policyMessage');
    if (!this.policyAccepted && policyMessage) {
      policyMessage.classList.remove('none');
    }
  }

  hidePolicyMessage() {
    const policyMessage = document.getElementById('policyMessage');
    if (policyMessage) {
      policyMessage.classList.add('none');
    }
  }
}
