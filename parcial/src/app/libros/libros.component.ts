import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnadirlibroComponent } from '../anadirlibro/anadirlibro.component';

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
  constructor(public dialog: MatDialog){}
ngOnInit(): void {

  }


  addBook(): void {

  }

  openDialog(){
   this.dialog.open(AnadirlibroComponent);
  }
}

