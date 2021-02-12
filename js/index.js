"use strict";
import { island } from './data.js';
import { game, player } from './game.js';


game.render();

const instructions = {
  chopAllTrees: function () {
    player.findNearestTree(player.position.x, player.position.y,
      (nearest) => this.move(nearest)
    );
  },
  move: function (nearest) {
    player.moveToTree(
      nearest,
      (handle, action, act) =>
        this.chopTree(handle, action)

    )
  },
  chopTree: function (object, action) {
    island.items[object].state = "empty";
    game.render()
    player.items.push(action.result)
  }
}
setInterval(() => {
  instructions.chopAllTrees();
}, 500)