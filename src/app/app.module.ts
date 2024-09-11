import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TechnicalComponent } from './technical/technical.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  

  //ruta del path de inicio (carga todos los componentes)
  { path: 'inicio', component: HomeComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},

  //ruta para redirigir a acceso
  { path: 'acceso', component: LoginComponent },


  //ruta para redirigir a la interfaz del tecnico
  { path: 'sistema', component: TechnicalComponent },

  //ruta para redirigir a la interfaz del tecnico
  { path: 'consultas', component: UserComponent },



  //ruta  de path no encontrado
  { path: '**', component: PagenotfoundComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    MenuComponent,
    LoginComponent,
    AboutusComponent,
    WhyWeComponent,
    WhatsappButtonComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    TechnicalComponent,
    UserComponent
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
