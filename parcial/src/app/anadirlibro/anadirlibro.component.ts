import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface libro {
  titulo: string;
  referencia: string;
  autor: string;
  precio: number;
  ubicacion: string;
}
@Component({
  selector: 'app-anadirlibro',
  templateUrl: './anadirlibro.component.html',
  styleUrls: ['./anadirlibro.component.css']
})
export class AnadirlibroComponent implements OnInit{
  libros: libro[] = [];
  constructor(
    public dialogRef: MatDialogRef<AnadirlibroComponent>){}
ngOnInit(): void {

  }

  onClose(): void {
    this.dialogRef.close();
  }

}
