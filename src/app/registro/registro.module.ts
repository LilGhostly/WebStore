import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,  // Marca la página como standalone
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],  // Asegúrate de importar los módulos necesarios
})
export class RegistroPage {}
