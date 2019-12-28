Crafty.c('Grid', {
  init: function() {
    this
      .requires('2D, Canvas, Color')
      .attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    });
  },

  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  },
});

Crafty.c('Pad', {
  init: function() {
    this.requires('Actor, Grid, Multiway, Collision')
      .attr({w: Game.map_grid.tile.width * 3, h: Game.map_grid.tile.height / 2 })
      .multiway(10 * Game.overallSpeed, {RIGHT_ARROW: 0, LEFT_ARROW: 180})
      .color('#85144b')
      .at(Game.map_grid.width /4, Game.map_grid.height -2)
      .stopOnSolids();
  },

  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },

  stopMovement: function() {
    if (this._motionDelta) {
      this.x -= this._motionDelta.x;
      this.y -= this._motionDelta.y;
    }
  }
});

Crafty.c('Wall', {
  init: function () {
    this.requires('Actor, Grid, Solid')
      .color('#111111');
  }
});