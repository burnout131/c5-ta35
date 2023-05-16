import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'c5-ta35';

  public nombre: string = '';
  public cif: string = '';
  public direccion: string = '';
  public grupo: number = 0;

  @Output() datosForm: any = {};

  guardarCliente(){
    this.datosForm = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    }
    this.resetear();
  }

  resetear() {
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = 0;
  }

}
