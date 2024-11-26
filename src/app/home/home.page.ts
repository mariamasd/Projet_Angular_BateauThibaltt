import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  //Liste carroussel images
  images: string[] = [
    'assets/Bateaux/chalutierBreton1.jpg', 
    'assets/Bateaux/chalutierBreton2.jpg',
    'assets/Bateaux/chalutierBreton3.jpg',
    'assets/Bateaux/chalutierBreton4.jpg'
  ];
  currentImage: string = '';
  private currentIndex: number = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    //Switch d'images du carroussel toutes les 4 secondes
    this.currentImage = this.images[this.currentIndex];
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 4000); // Change toutes les 4 secondes
  }
}
