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