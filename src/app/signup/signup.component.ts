import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class SignupComponent implements OnInit {

  isLinear = false;
  hide = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  country_selected;
  city_selected;
  countries;
  cities;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private master: MasterService) { }

  ngOnInit(): void {
    this.getCountry();
    this.firstFormGroup = this._formBuilder.group({
      fullname: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password : ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      coordinates: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }

  openLogin(): void {
    this.router.navigate(['login']);
  }

  async getCountry() {
    this.countries = await this.master.getCountryList();
    this.countries = this.countries.data;
  }

  async getCities() {
    this.cities = await this.master.getCountryList(this.country_selected);
    this.cities = this.cities.data[0].CITIES;
  }

  getLocation() {

  }

  async createAccount() {
    const dob = this.firstFormGroup.get('dob').value;
    const userDetails = {
      FULL_NAME : this.firstFormGroup.get('fullname').value,
      EMAIL : this.firstFormGroup.get('email').value,
      PHONE : this.firstFormGroup.get('phone').value,
      COUNTRY : this.country_selected,
      CITY : this.city_selected,
      ZIP_CODE : this.secondFormGroup.get('zipcode').value,
      DOB : this.firstFormGroup.get('dob').value,
      PASSWORD : this.firstFormGroup.get('password').value,
    }
    const status = await this.master.createUserAccount(userDetails);
  }

}
