/* global Phaser */

// Scene

const gameScene = new Phaser.Scene("Game");

// Initialization

gameScene.init = function() {
  this.playerSpeed = 1.5;
  this.dragonSpeed = 2;
  this.dragonMaxY = 280;
  this.dragonMinY = 80;
};

// Preload

gameScene.preload = function() {
  this.load.image("background", "assets/background.png");
  this.load.image("player", "assets/player.png");
  this.load.image("dragon", "assets/dragon.png");
  this.load.image("treasure", "assets/treasure.png");
};
// Create

gameScene.create = function() {
  // Reset FX
  this.cameras.main.resetFX();

  // dimensions

  const gameW = this.sys.game.config.width;
  const gameH = this.sys.game.config.height;

  // background

  const bg = this.add.sprite(0, 0, "background");
  bg.setPosition(gameW / 2, gameH / 2);

  // player

  this.player = this.add.sprite(40, gameH / 2, "player");
  this.player.setScale(0.5);

  // Treasure

  this.treasure = this.add.sprite(gameW - 80, gameH / 2, "treasure");
  this.treasure.setScale(0.6);

  // dragons

  this.dragons = this.add.group({
    key: 'dragon',
    repeat: 5,
    setXY: {
      x: 110,
      y: 100,
      stepX: 80,
      stepY: 20
    }
  });
  Phaser.Actions.ScaleXY(this.dragons.getChildren(), -.5, -.5);

  // set speed

  Phaser.Actions.Call(this.dragons.getChildren(), function(dragon) {
    dragon.speed = Math.random() * 2 + 1;
  }, this)
};

// Update

gameScene.update = function() {
  // Alive Status
  this.player.isAlive = true;

  if (!this.player.isAlive) {
    return;
  }
  // Move Player

  if (this.input.activePointer.isDown) {
    this.player.x += this.playerSpeed;
  }
};