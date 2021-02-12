
import { island } from './data.js';

export const player = {
  position: {
    x: 1,
    y: 1
  },
  items: [],

  moveLeft: function () { if (this.position.x - 1 >= 0) { this.position.x-- }; game.render() },
  moveRight: function () { if (this.position.x + 1 <= island.settings.tilesize) { this.position.x++ }; game.render() },
  moveUp: function () { if (this.position.y - 1 >= 0) { this.position.y-- }; game.render() },
  moveDown: function () { if (this.position.y + 1 <= island.settings.tilesize) { this.position.y++ }; game.render() },

  moveToTree: function (nearest, actionCallback) {
    const nearTree = island.items[nearest]
    setTimeout(() => {
      if (this.position.x < nearTree.position.x) { this.moveRight(); }
      else if (this.position.x > nearTree.position.x) { this.moveLeft(); }
      else if (this.position.y < nearTree.position.y) { this.moveDown() }
      else if (this.position.y > nearTree.position.y) { this.moveUp(); }
      if (this.distance(this.position.x, nearTree.position.x, this.position.y, nearTree.position.y) == 1) {
        actionCallback(nearest, nearTree, "chop");
      }
    }, 200)
  },

  findNearestTree: function (x, y, callback) {
    const filtered = Object.keys(island.items).filter((a) => { return island.items[a].handle == "tree" && island.items[a].state == "full" })
    const sorted = filtered.sort((a) => {
      return this.distance(island.items[a].position.x, x, island.items[a].position.y, y)
    })
    if (sorted.length > 0) {
      setTimeout(() => {
        callback(sorted[0]);
      }, 200)
    }
  },

  distance: (x1, x2, y1, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt((dx * dx) + (dy * dy))
  },
}
export const game = {
  render: function () {
    const field = document.getElementById("field");
    field.innerHTML = ""
    for (let i = 0; i < island.settings.tilesize; i++) {
      for (let j = 0; j < island.settings.tilesize; j++) {
        const d = document.createElement('div');
        d.classList.add("tile");
        if (j == player.position.x && i == player.position.y) {
          d.classList.add("character");
        } else {
          Object.keys(island.items).forEach((index, key) => {
            const item = island.items[index];
            if (item.position.x == j && item.position.y == i) {
              d.classList.add(item.handle);
              d.classList.add(item.state);
            }
          })
        }
        field.appendChild(d);
      }
    }
  }
}