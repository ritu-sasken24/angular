import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;


  constructor(public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }


  get f() { return this.profileForm.controls; }

}
