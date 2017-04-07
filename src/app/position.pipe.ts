import { Pipe, PipeTransform } from '@angular/core';
import {Player} from './player.model';

@Pipe({
  name: 'position',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], selectedPosition) {
    var output: Player[] = [];
    if(selectedPosition === "infield") {
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Infield") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedPosition === "outfield") {
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Outfield") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (selectedPosition === "pitcher") {
      for (var i = 0; i < input.length; i++){
        if (input[i].position === "Pitcher") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
