import { Component, HostListener  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller, private router: Router) {
    // Escuchar eventos de navegación para el scroll a secciones
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const section = localStorage.getItem('scrollToSection');
      if (section) {
        setTimeout(() => { 
          this.viewportScroller.scrollToAnchor(section);
        }, 300); // Ajuste del tiempo según sea necesario
        localStorage.removeItem('scrollToSection');
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // Método para hacer scroll solo a secciones específicas
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
      this.closeMenu();
    } else {
      localStorage.setItem('scrollToSection', sectionId);
      this.router.navigate(['/inicio']);
      this.closeMenu();
    }
  }



  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el usuario ha hecho scroll más de 50px, cambia el fondo a azul
    this.isScrolled = window.pageYOffset > 50;
  }


}
