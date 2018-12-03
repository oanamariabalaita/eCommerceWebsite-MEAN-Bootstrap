import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	uri = 'http://localhost/4200';

  constructor(private http: HttpClient) { 
  }
  
  getProducts(){
  return this.http.get(`${this.uri}/products`);
  }
  
  getOrders(){
  return this.http.get(`${this.uri}/orders`);
  }
  
  getOrderById(id){
  return this.http.get(`${this.uri}/orders/${id}`);}
  
  addOrder(name,date,street,street_number,address_details,country,city,postal_code, phone, company_name, company_VAT, company_REG, company_address, manufacturing_time,gift_code,payment_type: string,
    payment_due){
    
    const order ={
     name : name,
     date :date,
     street: street,
     street_number : street_number,
     address_details : address_details,
     country : country,
     city : city,
     postal_code : postal_code,
     phone : phone,
     company_name : company_name,
     company_VAT : company_VAT,
     company_REG : company_REG,
     company_address : company_address,
     manufacturing_time : manufacturing_time,
     gift_code : gift_code,
     payment_type: payment_type,
     payment_due : payment_due
    }
    
    return this.http.post(`${this.uri}/orders/add`, order);
    
   }
   
   updateOrder(id, name,date,street,street_number,address_details,country,city,postal_code, phone, company_name, company_VAT, company_REG, company_address, manufacturing_time,gift_code,payment_type: string,
    payment_due){
    
    const order ={
     name : name,
     date :date,
     street: street,
     street_number : street_number,
     address_details : address_details,
     country : country,
     city : city,
     postal_code : postal_code,
     phone : phone,
     company_name : company_name,
     company_VAT : company_VAT,
     company_REG : company_REG,
     company_address : company_address,
     manufacturing_time : manufacturing_time,
     gift_code : gift_code,
     payment_type: payment_type,
     payment_due : payment_due
    }
    
    return this.http.post(`${this.uri}/orders/update/${id}`, order);
    
   }
   
   deleteOrder( id){
   return this.http.get(`${this.uri}/orders/delete/${id}`);
   }
}
