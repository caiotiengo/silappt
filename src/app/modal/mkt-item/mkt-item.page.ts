import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mkt-item',
  templateUrl: './mkt-item.page.html',
  styleUrls: ['./mkt-item.page.scss'],
})
export class MktItemPage implements OnInit {
  @Input('data') data: any;
  constructor(private modalCtrlR: ModalController) { }

  ngOnInit() {
    console.log(this.data)
  }


  voltar(){
    this.modalCtrlR.dismiss()
  }

}
