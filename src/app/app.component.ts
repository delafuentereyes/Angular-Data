import { Component, Input } from '@angular/core';
import { gamesData } from '../data/games.data';
import { Game } from 'src/model/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Games catalog';

  games = gamesData;

  onGameSelected(game: Game) {
    console.log("App Component onMovieSelected", game);
  }
}
