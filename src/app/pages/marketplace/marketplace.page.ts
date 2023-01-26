import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MktItemPage } from 'src/app/modal/mkt-item/mkt-item.page';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView:2.5,
    speed: 400
  };
  listaProdutos: any = [];
  message: string | undefined;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    let body =  [
      {
          "treinoNome": "Treino de perna",
          "categoriaNome": "Musculação",
          "estrelas": 44685,
          "descricao": "Um treino bom de musculação que ajuda no crescimento do musculo!",
          "nivel": "Iniciante",
          "img": "https://assets.sweat.com/html_body_blocks/images/010/024/160/original/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801317",
          "comprado": "TRUE",
          "idexercicio":1

      },
      {
          "treinoNome": "Trincando peito",
          "categoriaNome": "Musculação",
          "estrelas": 44686,
          "descricao": "Um treino bom de musculação que ajuda no crescimento do musculo!",
          "nivel": "Iniciante",
          "img": "https://daddysdeals.co.za/wp-content/uploads/2022/06/Triple-S-Fitness-cover-image.jpg",
          "comprado": "FALSE",
          "idexercicio":2
      },
      {
          "treinoNome": "Preparação FIT",
          "categoriaNome": "Aeróbico",
          "estrelas": 44684,
          "descricao": "Um treino bom de musculação que ajuda no crescimento do musculo!",
          "nivel": "Avançado",
          "img": "https://blogtrib.com/wp-content/uploads/2022/09/e2facca2-3985-11e8-8aa5-05fdb8d0ae52-780x470.webp",
          "comprado": "FALSE",
          "idexercicio":3
      }
  ]
    this.listaProdutos = body;
    console.log(this.listaProdutos)
  }
  async modalTreinamento(item:any){
    const modal = await this.modalCtrl.create({
      component: MktItemPage,
      componentProps:{
        data: item
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
}
