import { Component } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Subscription } from 'rxjs';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  characters: any[] = [];
  arrInside: any[] = [];

  chrSuscr: Subscription = new Subscription;
  
  constructor(private infoServ: InfoService) { }

  ngOnInit() {

      this.chrSuscr = this.infoServ.getInfo().subscribe(characters => characters.map((character: Character) => {
        this.arrInside.push(character);
        
        if(this.arrInside.length == 5) {
          this.characters.push(this.arrInside);
          this.arrInside = [];  
        }
        return this.characters;
      }));
  }


  ngOnDestroy() {
    this.chrSuscr.unsubscribe();
  }
}
