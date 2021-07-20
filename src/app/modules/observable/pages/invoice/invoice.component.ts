import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../services/invoice.service'
import {Client, Invoice, InvoiceLine } from '../../../../models';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [InvoiceService]
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  lines: InvoiceLine[];
  client: Client;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    /*console.log("Inicio ");
    console.log("cargo factura");

    this.invoiceService.getInvoiceByDocumentNo('122312').then(invoice=> {
      this.invoice = invoice;
      console.log("cargo cliente")

      this.invoiceService.getClient(this.invoice.client_id).toPromise().then(client=> {
        console.log("cargo lineas")

        this.client= client;

        this.invoiceService.getLines(this.invoice.id).toPromise().then(lines=> {
          this.lines= lines;

        })

      });




    });

    console.log("Fin")*/

    this.loadData();
  }


  async loadData(){

    console.log("inicio")
    console.log("cargo factura");

    try{

      this.invoice  = await this.invoiceService.getInvoiceByDocumentNo('2323');
      console.log("cargo cliente");

      this.client = await this.invoiceService.getClient(this.invoice.client_id).toPromise();
  
      console.log("cargo lineas");
      this.lines = await this.invoiceService.getLines(this.invoice.id).toPromise();


      /*Una mejora paralela
      let promiseCLient : Promise<Client> = this.invoiceService.getClient(this.invoice.client_id).toPromise();
      let promiseLines : Promise<InvoiceLine[]> = this.invoiceService.getLines(this.invoice.id).toPromise();

      let result = await Promise.all([promiseCLient, promiseLines]);
      this.client = result[0];
      this.lines = result[1];*/

    }catch(error){
      console.log("ERROR", error)
    }

 

    console.log("termino")


  }

}
