import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-aquilon',
  templateUrl: './aquilon.page.html',
  styleUrls: ['./aquilon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AquilonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
