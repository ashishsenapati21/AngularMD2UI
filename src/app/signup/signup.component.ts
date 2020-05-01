import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../services/master.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Country {
  COUNTRY: string;
  CODE: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  country_selected;
  countries;
  cities;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private master: MasterService) { }

  ngOnInit(): void {
    this.getCountry();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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

}
