import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';  // Utilisation correcte du module Ionic
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; // Importation correcte ici
import { Product } from '../models/product.module';  // Assurez-vous que ce modèle existe

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
  standalone: true,
  imports: [IonContent, IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]  // Inclure les modules nécessaires ici
})
export class CategoriePage implements OnInit {
 
  constructor() {}

  ngOnInit() {
  }
 
}
