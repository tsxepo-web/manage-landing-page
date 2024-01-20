import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  emailForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    email: ['', Validators.email],
  });
}
