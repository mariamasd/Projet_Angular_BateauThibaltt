import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
