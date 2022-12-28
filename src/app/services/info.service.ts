import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  URLApi: string = 'https://thronesapi.com/api/v2/Characters';


  constructor(private client: HttpClient) { }

  getInfo(): Observable<Character[]> {
    
    return this.client.get<any>(this.URLApi);

    
  }
}
