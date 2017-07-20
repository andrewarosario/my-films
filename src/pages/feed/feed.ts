import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmesProvider } from "../../providers/filmes/filmes";

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      FilmesProvider
  ]
})

export class FeedPage {
    public listaFilmes = new Array<any>();

    public feed = {
        titulo: "Andrew Rosário",
        data: "18 de julho",
        descricao: "The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.",
        qtd_likes: 12,
        qtd_comentarios: 4,
        hora_comentario: "11 horas atrás"
    }

    public nome_usuario:string = "Andrew Rosário";

    constructor(public navCtrl: NavController, public navParams: NavParams, private filmesProvider: FilmesProvider) {
    }

    ionViewDidLoad() {
        this.filmesProvider.getUltimosFilmes().subscribe(
            data => {
                const response = (data as any);
                const objeto_retorno = JSON.parse(response._body);
                this.listaFilmes = objeto_retorno.results
            }, error => {
                console.log(error);
            }
        )
    }

}
