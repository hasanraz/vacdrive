import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccinationService } from './services/vaccination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'shubhamProj';
  states: any;

  constructor(private vaccinationService: VaccinationService,
    private router: Router) {
    this.vaccinationService.getState();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.router.navigate(['state']);
  }
}
