import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'c5-ta35';
  name = 'Alta cliente';

  public nombre: string = '';
  public cif: string = '';
  public direccion: string = '';
  public grupo: number = 0;

  //Añadimos los dos registros que hay por defecto
  @Output() datosForm: any[] = [{ nombre: "Cliente 1", cif: "B 123", direccion: "C/ la la la", grupo: 1 },
  { nombre: "Cliente 2", cif: "A 334", direccion: "Av lo lo lo", grupo: 2 }];

  //Método que se ejecutará cuando hagamos click en "Guardar"
  guardarCliente() {
    let datos = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo
    };
    this.datosForm.push(datos);
    //Una vez guardado el nuevo cliente, limpiamos los campos de texto
    this.resetear();
  }

  resetear() {
    this.nombre = '';
    this.cif = '';
    this.direccion = '';
    this.grupo = 0;
  }

}
