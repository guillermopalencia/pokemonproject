import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient) {}

  pokemon:any

  title = 'pokemon-api';

  url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`


  ngOnInit(){ 
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
			'x-rapidapi-key': 'your-api-key'
    })
    this.http
        .get<any>(' https://pokeapi.co/api/v2/pokemon?offset=0&limit=151', {
          headers: headers
        })
        .subscribe(pokemonData => {
          this.pokemon = pokemonData
          console.log(pokemonData.results)
        })
  }
    
}
