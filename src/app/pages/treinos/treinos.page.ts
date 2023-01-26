import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.page.html',
  styleUrls: ['./treinos.page.scss'],
})
export class TreinosPage implements OnInit {

  listaProdutos: any = [];
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    let body =  [
      {
          "treinoNome": "Treino de perna!",
          "categoriaNome": "Musculação",
          "estrelas": 44685,
          "descricao": "Um treino bom de musculação que ajuda no crescimento do musculo!",
          "nivel": "Iniciante",
          "img": "https://assets.sweat.com/html_body_blocks/images/010/024/160/original/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801317",
          "comprado": "TRUE",
          "idexercicio":1
      }
  ]
    this.listaProdutos = body;
    console.log(this.listaProdutos)
  }

  goPaginaTreino(id:any){
    console.log(id)
    this.navCtrl.navigateForward('treino/'+ id)
  }

}
