import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  apiExemple = [{
    "listaTreino": [
        {
            "tituloAcc": "Segunda - Quadriceps",
            "progresso": "2",
            "textoExplicativo": "Mobilidade de quadril, joelho e tornozelo",
            "idDia": "1",
            "foto":"",
            "video":"https://www.youtube.com/embed/m3F8OIx9n-0",
            "treinos": [{
                          "exerc": "CADEIRA EXTENSORA UNILATERAL + SIMULTÂNEO",
                          "qtd": "3 Séries",
                          "obs": "12 repetições cada perna + 12 repetições com as duas pernas",
                          "idDia": "1"
                      },
                      {
                          "exerc": "LEG 45",
                          "qtd": "4 séries",
                          "obs": "12 + dropset na última série",
                          "idDia": "1"
                      },
                      {
                          "exerc": "AGACHAMENTO NO SMITH",
                          "qtd": "4 séries",
                          "obs": "10 repetições",
                          "idDia": "1"
                      },
                      {
                          "exerc": "PASSADA FIXA NO SMITH - TRONCO ERETO",
                          "qtd": "3 séries",
                          "obs": "10 repetições com cada perna",
                          "idDia": "1"
                      },
                      {
                          "exerc": "AGACHAMENTO FRONTAL COM ANILHA",
                          "qtd": "3 séries",
                          "obs": "12 reps",
                          "idDia": "1"
                      },
                      {
                          "exerc": "CADEIRA ADUTORA",
                          "qtd": "4 séries",
                          "obs": "15 repetições",
                          "idDia": "1"
                      }
            ]
        },
        {
            "tituloAcc": "Terça - Costas e Biceps",
            "progresso": "4",
            "textoExplicativo": "Mobilidade de escapulas e ombro",
            "idDia": "2",
            "foto":"https://assets.sweat.com/html_body_blocks/images/010/024/160/original/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801317",
            "video":"",
            "treinos":[{
              "exerc": "PUXADA SUPINADA",
              "qtd": "3 Séries",
              "obs": "12 reps",
              "idDia": "2"
          },
          {
              "exerc": "REMADA CURVADA PRONADA",
              "qtd": "3 Séries",
              "obs": "12 reps",
              "idDia": "2"
          },
          {
              "exerc": "REMADA NEUTRA SENTADA",
              "qtd": "3 Séries",
              "obs": "12 reps",
              "idDia": "2"
          },
          {
              "exerc": "BÍCEPS ALTERNADO",
              "qtd": "3 Séries",
              "obs": "10 reps",
              "idDia": "2"
          },
          {
              "exerc": "BICEPS BARRA W",
              "qtd": "3 séries",
              "obs": "12 reps",
              "idDia": "2"
          },
          {
              "exerc": "ABDOMINAL SUPRA COM CARGA",
              "qtd": "3 Séries",
              "obs": "20 reps",
              "idDia": "2"
          }

            ]
        },
        {
            "tituloAcc": "Quarta - Quadriceps e Gluteo",
            "progresso": "6",
            "textoExplicativo": "Mobilidade de quadril, joelho e tornozelo",
            "idDia": "3",
            "foto":"",
            "video":"",
            "treinos":[{
              "exerc": "PRANCHA ISOMÉTRICA",
              "qtd": "4 Séries",
              "obs": "Máximo que aguentar",
              "idDia": "3"
          },
          {
              "exerc": "EXTENSÃO DE QUADRIL NO CABO",
              "qtd": "4 Séries",
              "obs": "12 reps",
              "idDia": "3"
          },
          {
              "exerc": "CADEIRA ABDUTORA",
              "qtd": "4 Séries",
              "obs": "15 reps",
              "idDia": "3"
          },
          {
              "exerc": "ELEVAÇÃO PÉLVICA",
              "qtd": "4 Séries",
              "obs": "12 reps com 2 segundos de isometria no pico de contração",
              "idDia": "3"
          },
          {
              "exerc": "CADEIRA FLEXORA",
              "qtd": "3 Séries",
              "obs": "15 reps",
              "idDia": "3"
          },
          {
              "exerc": "STIFF",
              "qtd": "3 séries",
              "obs": "12 reps",
              "idDia": "3"
          },
          {
              "exerc": "PANTURRILHA EM PÉ",
              "qtd": "3 séries",
              "obs": "20 reps",
              "idDia": "3"
          }
              
            ]
        },
        {
            "tituloAcc": "Quinta -  Ombro",
            "progresso": "8",
            "textoExplicativo": "Mobilidade de escapulas e ombro",
            "idDia": "4",
            "foto":"https://assets.sweat.com/html_body_blocks/images/010/024/160/original/BackToGymSWEAT_enf1f07a7f6f79e7b8807d2436a6ae8e8b.jpg?1625801317",
            "video":"",
            "treinos":[{
              "exerc": "FLEXÃO DE BRAÇO NO SOLO",
              "qtd": "4 Séries",
              "obs": "15 reps",
              "idDia": "4"
          },
          {
              "exerc": "CRUCIFIXO INVERSO MÁQUINA",
              "qtd": "3 Séries",
              "obs": "10 reps",
              "idDia": "4"
          },
          {
              "exerc": "DESENVOLVIMENTO COM HALTERES",
              "qtd": "4 Séries",
              "obs": "12 repetições",
              "idDia": "4"
          },
          {
              "exerc": "ABDUÇÃO DE OMBRO + FLEXÃO DE OMBRO",
              "qtd": "4 Séries",
              "obs": "10+10 repetições",
              "idDia": "4"
          },
          {
              "exerc": "ABDOMINAL SUPRA COM CARGA",
              "qtd": "4 Séries",
              "obs": "20 repetições",
              "idDia": "4"
          }
              
            ]
        },
        {
            "tituloAcc": "Sexta - Quadriceps e Gluteo",
            "progresso": "10",
            "textoExplicativo": "Mobilidade de quadril, joelho e tornozelo",
            "idDia": "5",
            "foto":" ",
            "video":" ",
            "treinos":[
              {
                "exerc": "PRANCHA ISOMÉTRICA",
                "qtd": "4 Séries",
                "obs": "falha ( máximo que aguentar)",
                "idDia": "5"
            },
            {
                "exerc": "ADUTORES",
                "qtd": "4 Séries",
                "obs": "15 reps",
                "idDia": "5"
            },
            {
                "exerc": "AGACHAMENTO LIVRE",
                "qtd": "4 Séries",
                "obs": "15 +12 reps",
                "idDia": "5"
            },
            {
                "exerc": "CADEIRA EXTENSORA",
                "qtd": "4 séries",
                "obs": "20 reps",
                "idDia": "5"
            },
            {
                "exerc": "AGACHAMENTO SUMÔ",
                "qtd": "3 Séries",
                "obs": "12 reps",
                "idDia": "5"
            },
            {
                "exerc": "ELEVAÇÃO PÉLVICA",
                "qtd": "4 Séries",
                "obs": "15 reps",
                "idDia": "5"
            },
            {
                "exerc": "CADEIRA ABDUTORA",
                "qtd": "4 Séries",
                "obs": "20 reps",
                "idDia": "5"
            },
            {
                "exerc": "ABDOMINAL INFRA",
                "qtd": "4 Séries",
                "obs": "15-20 reps",
                "idDia": "5"
            }
            ]
        },
        {
            "tituloAcc": "Sabado - Descanso",
            "progresso": "1",
            "idDia": "6",
            "foto":" ",
            "video":" ",
            "treinos":[
              
            ]
        },
        {
            "tituloAcc": "Domingo -  Descanso",
            "progresso": "1",
            "idDia": "7",
            "foto":" ",
            "video":" ",
            "treinos":[
              
            ]
        }
    ]}]


  listaFinal: any = [];
  constructor(public navCtrl : NavController) { 
    console.log(this.apiExemple[0])

  }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.pop();
  }
}
