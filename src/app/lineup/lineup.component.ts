import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent  {

  constructor(private router: Router){}

  
players: Player[] = [
  new Player("Ichiro Suzuki", "Outfield", ".353", " Ichiro has established a number of batting records, including MLB's single-season record for hits with 262. He had 10 consecutive 200-hit seasons, the longest streak by any player in history", 1 ),
  new Player("David Ortiz", "Infield/DH", ".286", " Ortiz was a ten-time All-Star, a three-time World Series champion, seven-time Silver Slugger winner, and he holds the Red Sox single-season record for home runs with 54, set during the 2006 season.", 2 ),
  new Player("Randy Johnson", "Pitcher", "Era: 3.2", " Ortiz was a ten-time All-Star, a three-time World Series champion, seven-time Silver Slugger winner, and he holds the Red Sox single-season record for home runs with 54, set during the 2006 season.", 3)

];

goToDetailPage(clickedPlayer: Player){
  this.router.navigate(['players', clickedPlayer.id]);
};

}
