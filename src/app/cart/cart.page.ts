import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController,ActionSheetController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule]
})
export class CartPage {
  cartItems: any[] = [];
  selectedLocation: string = ''; // Lieu de livraison sélectionné
  selectedDate: string = '';    // Date de livraison sélectionnée
  selectedTime: string = '';    // Heure de livraison sélectionnée

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private router: Router 
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loadCart();
  }

  // Charger les articles du panier depuis le localStorage
  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log(this.cartItems)
  }

  // Calculer le total des articles du panier
  calculateTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }

  // Ajouter la quantité d'un article
  incrementQuantity(item: any) {
    item.quantity += 1;
    this.updateCart();
  }

  // Réduire la quantité d'un article
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
    }
    this.updateCart();
  }

  // Mettre à jour les articles du panier dans le localStorage
  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  // Vider le panier
  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  // ActionSheet pour sélectionner le lieu de livraison
async openLocationActionSheet() {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Lieu de livraison',
    buttons: [
      {
        text: 'Librairie de Paris, 75005',
        handler: () => {
          this.selectedLocation = 'Librairie de Paris, 75005';
        },
      },
      {
        text: 'Tabac Saint-Dominique, 75007',
        handler: () => {
          this.selectedLocation = 'Tabac Saint-Dominique, 75007';
        },
      },
      {
        text: 'Pharmacie de Belleville, 75020',
        handler: () => {
          this.selectedLocation = 'Pharmacie de Belleville, 75020';
        },
      },
      {
        text: 'Boutique Le Coin Bio, 75009',
        handler: () => {
          this.selectedLocation = 'Boutique Le Coin Bio, 75009';
        },
      },
      {
        text: 'L’épicerie du Canal, 75010',
        handler: () => {
          this.selectedLocation = 'L’épicerie du Canal, 75010';
        },
      },
      {
        text: 'Presse République, 75011',
        handler: () => {
          this.selectedLocation = 'Presse République, 75011';
        },
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Action annulée pour le lieu');
        },
      },
    ],
  });

  await actionSheet.present();
}

// ActionSheet pour sélectionner la date et l'heure de livraison
async openDateActionSheet() {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Date de livraison',
    buttons: [
      {
        text: 'Samedi 23 décembre, 9h',
        handler: () => {
          this.selectedDate = 'Samedi 23 décembre';
          this.selectedTime = '9h';
        },
      },
      {
        text: 'Dimanche 24 décembre, 11h',
        handler: () => {
          this.selectedDate = 'Dimanche 24 décembre';
          this.selectedTime = '11h';
        },
      },
      {
        text: 'Lundi 25 décembre, 16h',
        handler: () => {
          this.selectedDate = 'Lundi 25 décembre';
          this.selectedTime = '16h';
        },
      },
      {
        text: 'Samedi 6 janvier, 9h',
        handler: () => {
          this.selectedDate = 'Samedi 6 janvier';
          this.selectedTime = '9h';
        },
      },
      {
        text: 'Dimanche 7 janvier, 11h',
        handler: () => {
          this.selectedDate = 'Dimanche 7 janvier';
          this.selectedTime = '11h';
        },
      },
      {
        text: 'Lundi 8 janvier, 17h',
        handler: () => {
          this.selectedDate = 'Lundi 8 janvier';
          this.selectedTime = '17h';
        },
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Action annulée pour la date et l\'heure');
        },
      },
    ],
  });

  await actionSheet.present();
}
async showConfirmationAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Envoyer votre commande?',
    message: `Envoyer votre commande de ${this.calculateTotal()}  € à Thibeaul?`,
    buttons: [
      {
        text: 'Non',
        role: 'cancel',
        handler: () => {
          console.log('Commande annulée');
        },
      },
      {
        text: 'Oui',
        handler: () => {
          this.sendOrder();
        },
      },
    ],
  });

  await alert.present();
}

// Simuler l'envoi de la commande
sendOrder() {
  console.log('Commande envoyée');

  // Vider le panier
  this.clearCart();

  // Rediriger vers la page Home
  this.router.navigate(['/home']); // Remplacez '/home' par le chemin réel de votre page Home
}


validateCart() {
  this.calculateTotal(); // Calculez le total avant d'afficher l'alerte
  this.showConfirmationAlert(); // Affichez l'alerte
}
}