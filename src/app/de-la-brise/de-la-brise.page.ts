import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // Importez NavController
@Component({
  selector: 'app-de-la-brise',
  templateUrl: './de-la-brise.page.html',
  styleUrls: ['./de-la-brise.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DeLaBrisePage implements OnInit {

  constructor(private navController: NavController) { } // Injectez NavController

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack('/bateaux'); // Navigue en arrière vers la page "bateaux"
  }
}
