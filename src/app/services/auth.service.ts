import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initializeApp } from 'firebase/app';  // Importa la función initializeApp
import { getAuth } from 'firebase/auth';  // Para usar las funcionalidades de autenticación
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    // Asegúrate de inicializar Firebase en el constructor
    const app = initializeApp(environment.firebaseConfig);  // Inicializa Firebase
    const auth = getAuth(app);  // Obtén la instancia de autenticación
  }

  // Método de registro de usuario
  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Método de inicio de sesión de usuario
  loginUser(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
