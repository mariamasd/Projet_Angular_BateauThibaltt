import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonAvatar,
  IonList,
  IonLabel,
  IonItem,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonHeader,
    IonButtons,
    IonAvatar,
    IonList,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ProductPage implements OnInit {
  categoryId!: number;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const paramId = params.get('id');
      if (paramId === null) {
        this.categoryId = this.extractCategoryIdFromURL();
      } else {
        this.categoryId = +paramId;
      }
      console.log('Category ID:', this.categoryId);
      this.loadProducts(); // Charger les produits pour la catégorie
    });
  }

  loadProducts() {
    this.http.get<any[]>('assets/data/Product.json').subscribe({
      next: (response) => {
        const groupedByCategory = response.reduce((groups, product) => {
          const category = product.category;
          if (!groups[category]) {
            groups[category] = [];
          }
          groups[category].push(product);
          return groups;
        }, {});

        this.products = groupedByCategory[this.categoryId] || [];
        console.log(
          'Produits de la catégorie',
          this.categoryId,
          ':',
          this.products
        );
      },
      error: (error) =>
        console.error('Erreur lors de la récupération des produits :', error),
    });
  }

  extractCategoryIdFromURL(): number {
    const urlParts = window.location.href.split('/');
    const idPart = urlParts[urlParts.length - 1];
    return isNaN(+idPart) ? -1 : +idPart;
  }

  getCategoryName(): string {
    switch (this.categoryId) {
      case 0:
        return 'Poissons';
      case 1:
        return 'Coquillages';
      case 2:
        return 'Crustacés';
      case 3:
        return 'Promotions';
      default:
        return 'Inconnue';
    }
  }

  // Ajouter un produit au panier
  addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; // Incrémenter la quantité
    } else {
      cart.push({ ...product, quantity: 1 }); // Ajouter un nouveau produit
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Mettre à jour le panier
    console.log('Produit ajouté au panier:', cart);
  }
}
