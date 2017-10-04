const MIN_ENEMY_POSITION = 1200;
const SMALL_ALIEN_SPEED_MODIFIER = -300;
const SMALL_ALIEN_MIN_SPEED = -150;

//
// Class representing a small enemy
//
function SmallAlien(game) {
    this.alienGroup;
    this.alienScoreValue;
}

SmallAlien.prototype.create = function( totalSmallAliens, imgSource, alienScoreValue ) {

   //All small aliens comes in groups 
   this.alienGroup = game.add.group();
   this.alienGroup.enableBody = true;

   game.physics.enable(this.alienGroup, Phaser.Physics.ARCADE);

   for (var i = 0; i < totalSmallAliens; i++) {

        //Creates coordinates 50px smaller than the game world dimensions (so the aliens can fit well on the screen)
        var x = Math.random() * 7500;
        var y = Math.random() * 550;

        //Defines a minimum starting position
        if (x < MIN_ENEMY_POSITION) {
            x += MIN_ENEMY_POSITION;
        }

        //Creates the alien based on the x and y. The last parameter is the spacing between each alien
        var alien = this.alienGroup.create( x, y, imgSource, game.rnd.integerInRange(0, 36));

        alien.body.velocity.x = Math.random() * SMALL_ALIEN_SPEED_MODIFIER;

        //Defines a minimun velocity
        if ( alien.body.velocity.x > SMALL_ALIEN_MIN_SPEED) {
            alien.body.velocity.x = SMALL_ALIEN_MIN_SPEED;            
        }

        //The aliens scale will vary a little, so there will be ones bigger than others
        var rand = game.rnd.realInRange(0.2, 0.4);
        alien.scale.setTo(rand, rand);
    }

    //Defines a score value to the aliens of this alien group
    this.alienScoreValue = alienScoreValue;
}

SmallAlien.prototype.update = function( ) {


}