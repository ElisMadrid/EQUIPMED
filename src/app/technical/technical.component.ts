import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent {
  selectedOption: string = '';
  isMenuOpen: boolean = false;
  username: string = 'NombreUsuario';  // Aquí puedes obtener dinámicamente el nombre del usuario.

  selectOption(option: string) {
    this.selectedOption = option;
  }

  logout() {
    // Aquí puedes implementar la lógica para cerrar sesión.
    console.log('Cerrar sesión');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
