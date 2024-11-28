import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent {
  // Variable pour vérifier si l'on est sur la page d'accueil
  showLogo: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifie l'URL actuelle pour ne pas afficher le logo sur la page d'accueil
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.showLogo = currentUrl !== '/home'; // Modifie en fonction de ta route d'accueil
    });
  }

  // Fonction de navigation vers la page d'accueil
  goHome() {
    this.router.navigate(['/home']); // Modifie en fonction de la route d'accueil
  }
}
