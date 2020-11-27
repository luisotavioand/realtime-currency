import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscription$: Subscription;
  navbarStyle: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscription$ = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.estilizarUrl(event.url);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  estilizarUrl(url: string) {
    console.log(url);
    if (url !== '/home') {
      this.navbarStyle = 'nav-light';
    } else { this.navbarStyle = 'nav-primary' }
  }
}
