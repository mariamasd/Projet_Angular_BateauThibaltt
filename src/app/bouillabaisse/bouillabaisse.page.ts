import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importez NavController pour gérer la navigation
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-bouillabaisse',
  templateUrl: './bouillabaisse.page.html',
  styleUrls: ['./bouillabaisse.page.scss'],
  standalone: true, // Standalone component
  imports: [IonicModule, CommonModule]
})
export class BouillabaissePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  // Méthode pour revenir en arrière
  goBack() {
    this.navController.navigateBack('/recettes'); // Naviguer vers la liste des recettes
  }
}
