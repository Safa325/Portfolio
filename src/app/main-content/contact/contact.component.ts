import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('formElement') formElement?: ElementRef<HTMLFormElement>;

  http = inject(HttpClient)

  policyAccepted: boolean = false;
  registerForm = this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    message:['',Validators.required],
  })
  isSubmited = false;
  mailTest = true;
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

  contactData = {
  }
  
  constructor(private fb: FormBuilder, private router: Router){

  }

  onSubmit() {
    this.isSubmited = true;
    if (this.registerForm.valid) {
      this.dataToJson()
      this.isSubmited = false;
      this.http.post(this.post.endPoint, this.post.body(this.registerForm.value))
        .subscribe({
          next: (response) => {
            this.registerForm.reset();
            this.showMessageFc()
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.isSubmited && this.registerForm.valid && this.mailTest) {
      this.registerForm.reset();
    }
  }

  dataToJson(){
    this.contactData = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      message: this.registerForm.value.message
    }
  }
  

  showMessageFc(){
    this.showMessage = true
    setTimeout(() => {
      this.showMessage = false
    }, 1000);
  }
 
  errorFc(id: string) {
    const control = this.registerForm.get(id);
    return control && control.invalid && (control.dirty || control.touched || this.isSubmited);
  }

  errorFcMessage(id: string) {
    const control = this.registerForm.get(id);
    return control && control.hasError('required') && (control.dirty || control.touched || this.isSubmited);
  }

  succesFcMessage(id: string) {
    const control = this.registerForm.get(id);
    return control && !control.invalid && (control.dirty || control.touched || this.isSubmited);
  }
  
  toggleSubmitState() {
    this.policyAccepted = !this.policyAccepted;
    if(this.policyAccepted){
      this.hidePolicyMessage()
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
