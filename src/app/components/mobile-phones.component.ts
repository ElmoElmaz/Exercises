import { Component } from '@angular/core';

import { Phone } from '../models/phone'
import { MobilePhonesService } from '../services/mobile-phones.service';
@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.css']
})
export class MobilePhonesComponent {

  phone: Phone[] = [];
  selectedphone: Phone = new Phone();
  showConfirmationDialog: boolean = false; 
  actionType: string = '';
  id: number = 0

constructor(private mobileService: MobilePhonesService) {

}
ngOnInit(): void { 
  this.getMobilePhones();
}

getMobilePhones(): void { 
  this.mobileService.getPhones().subscribe(Phones => (this.phone = Phones))
}

selectMobilePhones(phone: Phone):void {
  this.selectedphone = { ...phone };
}

updateMobilePhones(childResult: boolean): void {
  if(childResult){
    this.mobileService.updatePhones(this.selectedphone);
    this.clearSelection();
    this.getMobilePhones();
    this.showConfirmationDialog = false 
  }
  else {
    this.showConfirmationDialog = false 
  }
}

confirmUpdateMobilePhones(): void {
  this.actionType = 'edit'
  this.showConfirmationDialog = true;
}


clearSelection(): void { 
  this.selectedphone = new Phone();
}

addPhone(childResult: boolean): void {
  if(childResult){
    this.mobileService.addPhones(this.selectedphone);
    this.clearSelection();
    this.getMobilePhones;
    this.showConfirmationDialog = false 
  }
  else {
  this.showConfirmationDialog = false
}
}

confirmAddPhone(): void {
if(this.selectedphone.name == ""){
  this.showConfirmationDialog = false; 
 }
 else {
  this.actionType = 'add'
  this.showConfirmationDialog = true;
 }
}

handleAction(childResult: boolean): void { 
  if(this.actionType == 'add'){
    this.addPhone(childResult);
  }
  if(this.actionType == 'edit'){
    this.updateMobilePhones(childResult)
  }
  if(this.actionType == 'delete') { 
    this.deletePhone(childResult , this.id)
  }
}

deletePhone(childResult: boolean , id:number): void {
  if(childResult){
    this.mobileService.deletePhone(id);
    this.clearSelection();
    this.getMobilePhones();
    this.showConfirmationDialog = false 
  }
  else {
    this.showConfirmationDialog = false 
  }
}

confirmDeleteMobilePhone(phone: Phone){
this.id = phone.id
this.selectedphone.name = phone.name
this.actionType = 'delete'
this.showConfirmationDialog = true;
}

}

