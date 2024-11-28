import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ratatouille',
  templateUrl: './ratatouille.page.html',
  styleUrls: ['./ratatouille.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RatatouillePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}