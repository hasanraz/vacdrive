import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  states = new BehaviorSubject<any>(null);
  district = new BehaviorSubject<any>(null);
  appoinmentData = new BehaviorSubject<any>(null);

  constructor(private httpService: HttpService) { }

  stateApi = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
  districtApi = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/';
  appointmentApi = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?';

  getState() {
     this.httpService.getMethod(this.stateApi).subscribe(res => {
       this.states.next(res['states']);
    }, err => {
      alert("States result found");
    })
  }

    getDistrict(stateId) {
      this.httpService.getMethod(this.districtApi+stateId).subscribe(res => {
        this.district.next(res['districts']);
     }, err => {
       alert("district result found");
     })
    
  }

  getAppointment(dist_id, date) {
    this.httpService.getMethod(this.appointmentApi+"district_id=" + dist_id + "&date=" + date).subscribe(res => {
      this.appoinmentData.next(res['centers']);
   }, err => {
     alert("Appointment Not Found");
   })
  }



}
