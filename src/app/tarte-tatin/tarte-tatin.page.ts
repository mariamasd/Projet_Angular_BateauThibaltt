import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tarte-tatin',
  templateUrl: './tarte-tatin.page.html',
  styleUrls: ['./tarte-tatin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TarteTatinPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
