//
// Class representing the game score
//
function Score(game) {
    this.scoreText;
    this.value = 0;
}

Score.prototype.create = function() {
    
    //Creates the score's text on the screen
    this.scoreText = game.add.text (16, 16, "Score: " + this.value, {
        font: "35px VT323, monospace",
        fill: "white",
        align: "center"
    });
}

Score.prototype.update = function(value) {
    
    //Updates the score as the enemies are killed
    this.value += value;
    this.scoreText.setText("Score: " + this.value);
}