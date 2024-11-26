import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Assurez-vous d'importer Router
import { IonicModule } from '@ionic/angular';  // Utilisez uniquement IonicModule pour les composants Ionic
import { CommonModule } from '@angular/common';  // Importez CommonModule pour Angular

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  // Utilisez uniquement IonicModule ici
})
export class RestaurantsPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(route: string) {
    this.router.navigate([route]);  // Navigue vers la route spécifiée
  }
}
