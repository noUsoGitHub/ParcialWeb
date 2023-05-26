import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LibroService } from '../libro.service';

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
    public dialogRef: MatDialogRef<AnadirlibroComponent>,
    public service: LibroService
    ){}
ngOnInit(): void {

  }

  onClose(): void {
    const libro: libro = {
      titulo: (<HTMLInputElement>document.getElementById('titulo')).value,
      referencia: (<HTMLInputElement>document.getElementById('referencia')).value,
      autor: (<HTMLInputElement>document.getElementById('autor')).value,
      precio: parseFloat((<HTMLInputElement>document.getElementById('precio')).value),
      ubicacion: (<HTMLInputElement>document.getElementById('ubicacion')).value
    };
    this.service.addLibro(libro);
    location.reload();
    this.dialogRef.close();
  }


}
