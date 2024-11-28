import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  products: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Utilisation de l'objet observer avec subscribe()
    this.http.get('assets/data/Product.json').subscribe({
      next: (response) => {
        this.products = response; // Gérer les données retournées
        console.log(this.products); // Afficher les produits dans la console
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits :', error); // Gestion des erreurs
      },
      complete: () => {
        console.log('Requête terminée !'); // Message lorsque la requête est terminée
      }
    });
  }
}
