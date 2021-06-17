import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VaccinationService } from 'src/app/services/vaccination.service';

@Component({
  selector: 'app-vaccenter',
  templateUrl: './vaccenter.component.html',
  styleUrls: ['./vaccenter.component.scss']
})
export class VaccenterComponent implements OnInit {

  centers: any;
  centersSubscription: Subscription;

  constructor(private vaccinationService: VaccinationService) { }

  ngOnInit(): void {
    this.centersSubscription = this.vaccinationService.appoinmentData.subscribe((data) => {
      this.centers = data;
    });
  }

}
