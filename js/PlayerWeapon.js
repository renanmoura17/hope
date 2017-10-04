//
// Class representing a weapon
//
function PlayerWeapon(game) {
    this.weapon;
}

PlayerWeapon.prototype.create = function( totalBullets, bulletSprite, bulletKillType, bulletSpeed, fireRate, trackSprite, trackSpriteX, trackSpriteY ) {
    this.weapon = game.add.weapon(totalBullets, bulletSprite);

    this.weapon.bulletKillType = bulletKillType
    this.weapon.bulletSpeed = bulletSpeed;
    this.weapon.fireRate = fireRate;

    //Associate the weapon with a sprite
    this.weapon.trackSprite(trackSprite, trackSpriteX, trackSpriteY, true);
}

PlayerWeapon.prototype.update = function(fireButton, alienSprite, alienScoreValue, score) {

    //Check if the player is trying to shoot
    if (fireButton.isDown) {
        this.weapon.fire();
    }

    //If the bullets touch the given sprite, both of them will be KILLED!
    var killed = game.physics.arcade.overlap(this.weapon.bullets, alienSprite, killSprite, null, this);

    //If the enemy has been killed, updates the score
    if ( killed ) {
        score.update(alienScoreValue);
    }
    
}

//Removes both the sprite's and the bullet's sprite off of the screen
function killSprite (bullet, sprite) {
    bullet.kill();
    sprite.kill();
}