export class Order {
  constructor(
    public id: number,
    public name: string,
    public date : Date,
    public street: string,
    public street_number: number,
    public address_details: string,
    public country : string,
    public city : string,
    public postal_code: string,
    public phone: number,
    public company_name: string,
    public company_VAT: string,
    public company_REG: string,
    public company_address: string,
    public manufacturing_time: number,
    public gift_code: string,
    public payment_type: string,
    payment_due: number
    ) { 
   this.id= id;
   this.name = name;
   this.date = date;
   this.street = street;
   this.street_number= street_number;
   this.address_details= address_details;
   this.country =country;
   this.city= city;
   this.postal_code= postal_code;
   this.phone= phone;
   this.company_name= company_name;
    this.company_VAT= company_VAT;
    this.company_REG= company_REG;
    this.company_address= company_address;
    this.manufacturing_time=manufacturing_time;
    this.gift_code=gift_code;
    this.payment_type= payment_type;
    payment_due=payment_due;
    }
}
