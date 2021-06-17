import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VaccinationService } from './../../services/vaccination.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination-form',
  templateUrl: './vaccination-form.component.html',
  styleUrls: ['./vaccination-form.component.scss']
})
export class VaccinationFormComponent implements OnInit, AfterViewInit {

  states: any;
  vacForm: FormGroup;
  vacDistForm: FormGroup;
  vacDateForm: FormGroup;
  statesSubscription: Subscription;
  districtSubscription: Subscription;
  districts: any;
  districtAvail = false;
  appointmentDate: any;
  selectedDistrict: any;


  constructor(private vaccinationService: VaccinationService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router) { }

  ngOnInit(): void {
    this.statesSubscription = this.vaccinationService.states.subscribe((data) => {
      this.states = data;
    });
    this.districtSubscription = this.vaccinationService.district.subscribe((data) => {
      this.districts = data;
      this.districtAvail = true;
    });
    this.vacForm = this.fb.group({
      state: [null]
      
    });
    this.vacDistForm = this.fb.group({
      district: [null]
    });
    this.vacDateForm = this.fb.group(
      {
        adate: null
      }
    )
  }

  ngAfterViewInit() {
    this.states = this.vaccinationService.states;
  }

  submit() {
    this.vaccinationService.getDistrict(this.vacForm.controls.state.value);
  }

  selectDistrict() {
    this.selectedDistrict = this.vacDistForm.controls.district.value;
  }

  selectDate() {
    this.appointmentDate = this.datePipe.transform(this.vacDateForm.controls.adate.value, "MM-dd-yyyy");
  }

  submitAppoinment() {
    this.vaccinationService.getAppointment(this.selectedDistrict, this.appointmentDate);
    this.router.navigate(['center']);
  }

}
