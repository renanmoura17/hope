//
// Class representing the player's ship
//
function Ship(game) {
    this.game = game;
    this.sprite = null;
    this.cursors;
    this.fireButton;
    this.lifebar;
}

Ship.prototype.create = function(lifebar) {
    this.sprite = game.add.sprite(10, 240, 'ship');

    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

    this.sprite.body.collideWorldBounds = true;

    //Creates the movement keys
    this.cursors = game.input.keyboard.createCursorKeys();

    //Associate the created lifebar to the ship
    this.lifebar = lifebar;
}

Ship.prototype.update = function(aliens) {

    //Defines the keyboard commands
    this.sprite.body.velocity.y = 0

    if (this.cursors.up.isDown) {
        this.sprite.body.velocity.y = -300;
    } 
    else if (this.cursors.down.isDown) {
        this.sprite.body.velocity.y = 300;
    }

    //Creates the fire button
    this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    //If an alien touches the ship, the player is killed
    game.physics.arcade.overlap(aliens, this.sprite, killPlayer, null, this);

}