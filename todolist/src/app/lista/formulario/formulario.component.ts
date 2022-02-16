import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../lista';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  lista:Lista = new Lista();

  constructor(private listaService:ListaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos():void{
    this.activatedRoute.params.subscribe(
      data => {
        let id = data['id'];
        if(id){
          this.listaService.obtener(id).subscribe(
            e => this.lista = e
          );
        }
      }
    );
  }

  crear():void{
    this.listaService.crear(this.lista).subscribe(
      data => this.router.navigate(['/lista'])
    )
  }

  actualizar():void{
    this.listaService.update(this.lista).subscribe(
      res=> this.router.navigate(['/lista'])
    );
  }
  

}
