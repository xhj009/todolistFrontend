import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './lista/formulario/formulario.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path: '', redirectTo: '/lista',pathMatch: 'full'},
  {path: 'lista', component: ListaComponent},
  {path: 'lista/formulario', component: FormularioComponent},
  {path: 'lista/formulario/:id', component: FormularioComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
