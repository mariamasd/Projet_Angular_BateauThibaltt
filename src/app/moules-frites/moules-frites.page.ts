import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-moules-frites',
  templateUrl: './moules-frites.page.html',
  styleUrls: ['./moules-frites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoulesFritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
