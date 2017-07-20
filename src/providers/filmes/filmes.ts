import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FilmesProvider {

  private apiPath = "https://api.themoviedb.org/3"

  constructor(public http: Http) {
    
  }

  getApiKey() {
      return "15f498435c542045ecb04b1bc69e083f";
  }

  getUltimosFilmes() {
      return this.http.get(this.apiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

}
