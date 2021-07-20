import { Injectable } from '@angular/core';
import { Client, Invoice, InvoiceLine } from '../../../models';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoice: Invoice = {
    id: '1',
    client_id: '10',
    status: 'Paid',
    issue_date: '2021-01-01',
    document_no: '1111-1111-1111'
  };


  client: Client = {
    id: '10',
    name: 'Alex Doe',
    street: 'Benito Juarez',
    country: 'Mexico',
    state: 'Chihuahua',
    phone: '6562-122-123',
    city: 'Ciudad Juarez'

  };

  lines: InvoiceLine[] = [{
    id: '1',
    invoice_id: '1',
    line_no: 1,
    unit_price: 12,
    amount: 12,
    quantity: 1,
    description: 'Producto 1'
  }, {
    id: '2',
    invoice_id: '1',
    line_no: 2,
    unit_price: 32,
    amount: 12,
    quantity: 3,
    description: 'Producto 2'
  }, {
    id: '3',
    invoice_id: '1',
    line_no: 3,
    unit_price: 12,
    amount: 12,
    quantity: 1,
    description: 'Producto 3'
  }, {
    id: '4',
    invoice_id: '1',
    line_no: 4,
    unit_price: 12,
    amount: 48,
    quantity: 4,
    description: 'Producto 4'
  }, {
    id: '1',
    invoice_id: '1',
    line_no: 1,
    unit_price: 12,
    amount: 24,
    quantity: 2,
    description: 'Producto 5'
  }]

  constructor() {

  }


  public getInvoiceByDocumentNo(documentno: string): Promise<Invoice> {
    return new Promise((resolve, reject) => {

      if (documentno === null) {
        reject('Falta el numero de documento');
      }

      setTimeout(() => {
        console.log("resolve");
        resolve(this.invoice);
      }, 300);

    })


  }

  public getClient(id: string): Observable<Client>{
    console.log("inicio servicio de cliente")
    return of(this.client).pipe(delay(150), tap(()=>console.log("termino cliente")));

  }

  public getLines(invoice_id: string): Observable<InvoiceLine[]>{
    console.log("inicio servicio de lineas")

    return of(this.lines).pipe(delay(200), tap(()=>console.log("termino lineas")));

  }


}
