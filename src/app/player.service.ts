import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
  this.players = angularFire.database.list('players');
}

getPlayers(){
  return this.players;
}

addPlayer(newPlayer: Player){
  this.players.push(newPlayer);
}

getPlayerById(playerId: string){
  return this.angularFire.database.object('players/' + playerId);
}

updatePlayer(localUpdatedPlayer){
    var albumEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    albumEntryInFirebase.update({name: localUpdatedPlayer.name,
                                position: localUpdatedPlayer.position,
                                average: localUpdatedPlayer.battingAverage,
                                bio: localUpdatedPlayer.bio,
                                image: localUpdatedPlayer.image,
                              });
  }

  deletePlayer(localPlayerToDelete){
    var playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
