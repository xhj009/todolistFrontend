import { Component, OnInit } from '@angular/core';
import { Lista } from './lista';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  list:Lista[] = [];

  constructor(private listaService:ListaService) { }

  ngOnInit(): void {
    this.listaService.obtenerLista().subscribe(
      data => this.list = data
      );
  }

  eliminar(lista:Lista):void{
    this.listaService.eliminar(lista.id).subscribe(
      e => this.listaService.obtenerLista().subscribe(
        res => this.list = res
      )
    );
  }

}
