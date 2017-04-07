import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: number;
  playerToDisplay: Player;

  constructor
     (private route: ActivatedRoute,
      private location: Location,
      private playerService: PlayerService
    ) {}

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.playerId = parseInt(urlParameters['id']);
      });
      this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    }


}
