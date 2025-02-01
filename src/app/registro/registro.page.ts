import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa los módulos de formularios
import { IonicModule } from '@ionic/angular';  // Importa el módulo Ionic

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,  // Marca el componente como standalone
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],  // Importa todos los módulos necesarios
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registroForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registroForm.valid) {
      const { email, password } = this.registroForm.value;
      this.authService.registerUser(email, password)
        .then(() => {
          console.log('Registro exitoso');
        })
        .catch((error) => {
          console.error('Error en el registro', error);
        });
    } else {
      console.log('Formulario no válido');
    }
  }
}
