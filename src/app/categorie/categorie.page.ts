import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';  // Utilisation correcte du module Ionic
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular'; // Importation correcte ici
import { Product } from '../../app/models/productS';  // Assurez-vous que ce modèle existe

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
  standalone: true,
  imports: [IonContent, IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]  // Inclure les modules nécessaires ici
})
export class CategoriesPage {
  products: Product[] = [];  // Tableau pour stocker les produits
  categories = {
    poissons: [] as Product[],  // Poissons
    coquillages: [] as Product[],  // Coquillages
    crustaces: [] as Product[]  // Crustacés
  };

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Récupérer les produits depuis un fichier JSON local
    this.http.get<Product[]>('assets/data/Product.json').subscribe({
      next: (response) => {
        this.products = response;
        this.filterByCategory();  // Filtrer les produits par catégorie
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits :', error);
      },
    });
  }

  // Filtrer les produits par catégorie
  filterByCategory() {
    this.categories.poissons = this.products.filter((product: Product) => product.category === 0);
    this.categories.coquillages = this.products.filter((product: Product) => product.category === 1);
    this.categories.crustaces = this.products.filter((product: Product) => product.category === 2);
  }

  // Fonction pour naviguer vers une autre page en fonction de la catégorie sélectionnée
  navigateToCategory(category: string) {
    this.router.navigate([`/product/${category}`]);  // Exemple de navigation dynamique
  }

  navigateTo(route: string) {
    this.router.navigate([route]);  // Naviguer vers une autre route
  }
}
