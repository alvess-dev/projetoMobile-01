import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar 
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    RouterLink 
  ]
})
export class ProjetoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}