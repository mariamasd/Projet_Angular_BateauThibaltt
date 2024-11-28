import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonContent,IonIcon,IonGrid,IonRow,IonCol,IonButtons,IonAvatar,IonList,IonLabel,IonItem, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonContent,IonIcon,IonGrid,IonRow,IonCol, IonHeader,IonButtons,IonAvatar,IonList,IonItem,IonLabel, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CategoriesPage implements OnInit {
  products: any[] = [];
  categories: number[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Charger les produits
    this.http.get<any[]>('assets/data/Product.json').subscribe({
      next: (response) => {
        this.products = response;

        // Extraire les catégories uniques
        this.categories = [...new Set(this.products.map(product => product.category))];
      },
      error: (error) => console.error('Erreur lors de la récupération des produits :', error),
    });
  }

  // Récupérer le nom de la catégorie
  getCategoryName(categoryId: number): string {
    switch (categoryId) {
      case 0: return 'Poissons';
      case 1: return 'Coquillages';
      case 2: return 'Crustacés';
      case 3: return 'Promotions';
      default: return 'Inconnue';
    }
  }

  // Naviguer vers les produits d'une catégorie
  navigateToCategory(categoryId: number) {
    this.router.navigate(['/product', categoryId]);
  }
}