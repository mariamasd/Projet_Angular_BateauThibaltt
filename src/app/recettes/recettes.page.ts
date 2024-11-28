import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importer Router pour la navigation
import { IonicModule } from '@ionic/angular';  // Modules Ionic pour les composants
import { CommonModule } from '@angular/common';  // Modules Angular communs

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  // Assurez-vous d'importer les modules nécessaires
})
export class RecettesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(route: string) {
    this.router.navigate([route]);  // Naviguer vers la page de la recette demandée
  }
}
