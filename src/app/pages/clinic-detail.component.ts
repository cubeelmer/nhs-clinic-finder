import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../services/clinic.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clinic-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="clinic">
      <h2>{{ clinic.name }}</h2>
      <p><strong>City:</strong> {{ clinic.city }}</p>
      <p><strong>Phone:</strong> {{ clinic.phone }}</p>

       <button (click)="goBack()">← Back to Clinics</button>
    </div>
 `
})
export class ClinicDetailComponent implements OnInit {
  clinic: any;

  constructor(private route: ActivatedRoute, private router: Router, private clinicService: ClinicService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clinicService.getClinicById(id).subscribe(data => this.clinic = data);
  }

  goBack() {
    this.router.navigate(['/clinics']);
  }

}
