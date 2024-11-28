import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Contient les produits ajoutés au panier

  constructor() {}

  // Ajouter un produit au panier
  addToCart(product: any) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
      existingProduct.subTotal = existingProduct.quantity * product.price;
    } else {
      this.cartItems.push({
        ...product,
        quantity: 1,
        subTotal: product.price
      });
    }
  }

  // Récupérer tous les articles du panier
  getCartItems() {
    return this.cartItems;
  }

  // Modifier la quantité d'un produit
  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      item.subTotal = item.price * quantity;
    }
  }

  // Calculer le total
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.subTotal, 0);
  }

  // Vider le panier
  clearCart() {
    this.cartItems = [];
  }
}
