import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  policyAccepted: boolean = false;
  nameValue: Boolean = false;
  emailValue: Boolean = false;
  messageValue: Boolean = false;

  toggleSubmitState() {
    this.policyAccepted = !this.policyAccepted;
    if(this.policyAccepted){
      this.hidePolicyMessage()
    }
  }

  emptyCheck(id:string){
    const input = (document.getElementById(id) as HTMLInputElement).value;
    if (input === '') {
      if (id === 'name') {
        this.nameValue = false;
      } if (id === 'email') {
        this.emailValue = false;
      } if (id === 'message') {
        this.messageValue = false;
      }
    } else {
      if (id === 'name') {
        this.nameValue = true;
        console.log(input)
      } if (id === 'email') {
        this.emailValue = true;
        console.log(input)
      } if (id === 'message') {
        this.messageValue = true;
        console.log(input)
      }
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

  showEmptyMessage() {
    const fields = [
      { id: 'name', value: this.nameValue, messageId: 'messageName' },
      { id: 'email', value: this.emailValue, messageId: 'messageEmail' },
      { id: 'message', value: this.messageValue, messageId: 'messageMessage' }
    ];
  
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const message = document.getElementById(field.messageId);
      if (!field.value && message) {
        message.classList.remove('none');
        input?.classList.add('border-red');
      } else {
        message?.classList.add('none');
        input?.classList.remove('border-red');
      }
    });
  }

  onSubmit(event:Event) {
    event.preventDefault()

    if (!this.nameValue || !this.emailValue || !this.messageValue)  {
      this.showEmptyMessage();
    } else {
    
     
    }
  }
}
