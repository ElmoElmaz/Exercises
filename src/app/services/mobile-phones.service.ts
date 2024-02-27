import { Injectable } from '@angular/core';
import { Phone } from '../models/phone'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MobilePhonesService {


  constructor() { }

  private mobilePhones : Phone [] = [
    { id:1, name: 'Samsung', brand: 'S23', color: 'black' , price: 100 , InStock: true},
    { id:2, name: 'Iphone', brand: '15', color: 'white' , price: 100 , InStock: true}
  ]

getPhones(): Observable<Phone[]> {
  return of (this.mobilePhones)
}

addPhones(phone: Phone): void {
  phone.id = this.generateId();
  this.mobilePhones.push(phone)
}

updatePhones(updatedPhones: Phone): void {
  const index = this.mobilePhones.findIndex(onj => onj.id == updatedPhones.id);
  this.mobilePhones[index] = {...updatedPhones}
}

deletePhone(PhoneId: number): void { 
  this.mobilePhones = this.mobilePhones.filter(obj => obj.id !== PhoneId)
}

private generateId(): number { 
  return Math.max(...this.mobilePhones.map(num => num.id) , 0) +1 
}









}


