import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {


  constructor(public navCtrl: NavController) {

  }
  compute() {
    this.TotalInterestPayable= (this.initBalanceTransfer * 0.015) * this.initPaymentTerm;
  this.TotalAmount = parseInt(this.initBalanceTransfer) + parseInt(this.TotalInterestPayable); 
  this.MonthlyPayment= (this.TotalAmount / this.initPaymentTerm);
}

}

