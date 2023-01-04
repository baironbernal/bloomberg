import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject, switchMap } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  URLApi: string = 'https://thronesapi.com/api/v2/Characters';
  characters: Array<Object> = [];
  arrInside: Array<Object> = [];
  

  constructor(private client: HttpClient) { }

  getInfo(): Observable<Array<Object>> {

    return this.client.get<Character[]>(this.URLApi).pipe(
      map(characters  => {
        return characters.map(c => {
          this.arrInside.push(c);
            if(this.arrInside.length == 5) {
                this.characters.push(this.arrInside);
                this.arrInside = [];
                return this.characters
            }
            return this.characters
            
        })
      })
    );
  }

  getCharacters() {
    return this.characters;
  }

}
