//
// Class representing the a lifebar
//
function Lifebar(game) {
    this.game = game;
    this.lifeGroup;
    this.lifeSprite;
    this.lifeSpriteWidth;
    this.x = 725;
    this.totalLives = 3;
}

Lifebar.prototype.create = function(lifebarSprite) {

    //Creates the life group
    this.lifeGroup = game.add.group();

    //Obtains the sprite's width
    this.lifeSprite = this.lifeGroup.create(this.x, 10, lifebarSprite);
    this.lifeSpriteWidth = this.lifeSprite.width;

    //Removes the initial sprite, as it was used only to get the width
    this.lifeSprite.kill();

    //There will be three lives. 
    //For each one of them, draw it on the screen, subtract the X position from its size and then add another life
    for(var i = 0; i < this.totalLives; i++) {
        this.lifeSprite = this.lifeGroup.create( this.x, 10, lifebarSprite );
        this.x = this.x - this.lifeSpriteWidth
    }
}

Lifebar.prototype.update = function() {

    //Get last life's position in the life group
    var lastPosition = this.lifeGroup.length - 1;

    //Remove the life from the group based on the acquired position
    this.lifeGroup.removeChildAt (lastPosition);

}