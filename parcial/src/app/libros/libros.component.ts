import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnadirlibroComponent } from '../anadirlibro/anadirlibro.component';
import { LibroService } from '../libro.service';

interface libro {
  titulo: string;
  referencia: string;
  autor: string;
  precio: number;
  ubicacion: string;
}
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit{
  libros: libro[] = [];
  constructor(public dialog: MatDialog, public service: LibroService){}
ngOnInit(): void {
  this.service.libros().subscribe((data: any)=>
  {
    this.libros = data
  })
  }


  addLibro(): void {
    this.openDialog()
  }

  openDialog(){
   this.dialog.open(AnadirlibroComponent);
  }
}

