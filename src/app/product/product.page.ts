import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonIcon, IonGrid, IonRow, IonCol, IonButtons, IonAvatar, IonList, IonLabel, IonItem, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonGrid, IonRow, IonCol, IonHeader, IonButtons, IonAvatar, IonList, IonItem, IonLabel, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductPage implements OnInit {
  categoryId!: number; // ID de la catégorie sélectionnée
  products: any[] = []; // Produits de cette catégorie

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Écoutez les changements dans les paramètres de l'URL (ex: id de la catégorie)
    this.route.paramMap.subscribe(params => {
      // Récupérer l'ID de la catégorie depuis les paramètres
      this.categoryId = +params.get('id')!;
      console.log('ID de la catégorie :', this.categoryId);
      console.log('URL actuelle:', window.location.href);

      // Charger les produits depuis le fichier JSON après chaque changement d'ID
      this.loadProducts();
    });
  }

  loadProducts() {
    this.http.get<any[]>('assets/data/Product.json').subscribe({
      next: (response) => {
        // Regrouper les produits par catégorie
        const groupedByCategory = response.reduce((groups, product) => {
          const category = product.category;
          if (!groups[category]) {
            groups[category] = [];
          }
          groups[category].push(product);
          return groups;
        }, {});

        console.log('Produits groupés par catégorie :', groupedByCategory);

        // Filtrer les produits de la catégorie spécifique
        this.products = groupedByCategory[this.categoryId] || [];
        console.log('Produits de la catégorie', this.categoryId, ':', this.products);
      },
      error: (error) => console.error('Erreur lors de la récupération des produits :', error),
    });
  }

  // Nom de la catégorie (facultatif)
  getCategoryName(): string {
    switch (this.categoryId) {
      case 0: return 'Poissons';
      case 1: return 'Coquillages';
      case 2: return 'Crustacés';
      case 3: return 'Promotions';
      default: return 'Inconnue';
    }
  }
}
