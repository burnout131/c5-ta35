import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class FormComponent {
  name = 'Listado clientes';
  
  //Recibimos los datos del nuevo cliente
  @Input() datosForm!: any[];
}
