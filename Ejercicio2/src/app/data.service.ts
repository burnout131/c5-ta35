import { Injectable } from '@angular/core';
import { Form } from './form';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private form: Form = new Form('','','');
  private datosActualizados = new BehaviorSubject<Form>(this.form);

  public contactData$ = this.datosActualizados.asObservable();

  setData(form: Form) {
    this.form = form;
    this.datosActualizados.next(this.form);
  }

  getData() {
    return this.datosActualizados.asObservable();
  }

}
