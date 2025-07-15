import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClinicService } from '../services/clinic.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-clinic-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="search-container">
      <input [(ngModel)]="searchTerm" placeholder="Search clinics..." />
    </div>
    <ul>
      <li *ngFor="let clinic of filteredClinics()">
        <a [routerLink]="['/clinics', clinic.id]">{{ clinic.name }}</a>
      </li>
    </ul>
  `,
  styles: [`
    .search-container {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
      width: 100%;
      max-width: 400px;
    }
  `]
})
export class ClinicListComponent implements OnInit {
  clinics: any[] = [];
  searchTerm = '';

  constructor(private clinicService: ClinicService) {}

  ngOnInit() {
    this.clinicService.getClinics().subscribe(data => this.clinics = data);
  }

  filteredClinics() {
    return this.clinics.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
