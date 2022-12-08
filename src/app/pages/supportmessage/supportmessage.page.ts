import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-supportmessage',
  templateUrl: './supportmessage.page.html',
  styleUrls: ['./supportmessage.page.scss'],
})
export class SupportmessagePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

    dismiss() {
  
    this.modalController.dismiss(1);
  
  }
submit(){
	
}
}
