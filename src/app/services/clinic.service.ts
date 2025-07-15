import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  constructor(private http: HttpClient) {}

  // Replace with real API endpoint when available
  getClinics(): Observable<any[]> {
    return of([
      { id: 1, name: 'NHS Manchester Clinic', city: 'Manchester', phone: '0123456789' },
      { id: 2, name: 'NHS Birmingham Health Centre', city: 'Birmingham', phone: '0987654321' },
      { id: 3, name: 'NHS Leeds Clinic', city: 'Leeds', phone: '0113222222' }
    ]);
  }

  getClinicById(id: number): Observable<any> {
    return this.getClinics().pipe(
      map(clinics => clinics.find(c => c.id === id))
    );
  }
}
