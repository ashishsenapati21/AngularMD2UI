import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UnsplashbgService } from '../unsplashbg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  constructor( private router: Router,
               private unsplash: UnsplashbgService) { }

  ngOnInit(): void {
  }

  openSignUp(): void {
    this.router.navigate(['signup'])
  }
}
