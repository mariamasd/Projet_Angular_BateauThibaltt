import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true, // Standalone component
  imports: [IonicModule, CommonModule] // Ajoutez IonicModule ici
})
export class BateauxPage {
  constructor(private router: Router) {}
  navigateTo(page: string) {
    this.router.navigate([page]); 
  }
}
