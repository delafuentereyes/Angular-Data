import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/model/game.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  game!: Game;

  @Output()
  gameSelected = new EventEmitter<Game>();

  onCardClicked(){
    console.log("card Component onCardClicked");
    this.gameSelected.emit(this.game);
  }

  isImageAvailable(){
    return this.game && this.game.Poster;
  }

  cardClasses(){
    return this.game.Category;
  }
}