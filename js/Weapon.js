//
// Class representing a weapon
//
function Weapon(game) {
    this.weapon;
}

Weapon.prototype.create = function( totalBullets, bulletSprite, bulletKillType, bulletSpeed, fireRate, trackSprite, trackSpriteX, trackSpriteY ) {
    this.weapon = game.add.weapon(totalBullets, bulletSprite);

    this.weapon.bulletKillType = bulletKillType
    this.weapon.bulletSpeed = bulletSpeed;
    this.weapon.fireRate = fireRate;

    //Associate the weapon with a sprite
    this.weapon.trackSprite(trackSprite, trackSpriteX, trackSpriteY, true);
}

Weapon.prototype.update = function(fireButton, sprite) {

    //Check if the player is trying to shoot
    if (fireButton.isDown) {
        this.weapon.fire();
    }

    //If the bullets touch the given sprite, both of them will be KILLED!
    game.physics.arcade.overlap(this.weapon.bullets, sprite, killSprite, null, this);
    
}

//Removes both the sprite's and the bullet's sprite off of the screen
function killSprite (bullet, sprite) {
    bullet.kill();
    sprite.kill();

    // If the sprite is an instance of Alien, then update the score: the player killed one more!
    // if ( sprite instanceof Alien ) {
    //     updateScore();
    // }
}