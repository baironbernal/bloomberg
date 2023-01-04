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
  chrSuscr: Subscription = new Subscription;
  
  constructor(private infoServ: InfoService) { }

  ngOnInit() {
   this.infoServ.getInfo().subscribe();
   this.characters = this.infoServ.getCharacters();
  }

  trackByItem(index: Number, item: Character){
    return item.id;
  } 


  ngOnDestroy() {
    this.chrSuscr.unsubscribe();
  }
}
