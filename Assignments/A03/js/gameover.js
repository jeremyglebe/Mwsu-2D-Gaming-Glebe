/* Program: Assignment 03 - Freefall Game
** Description: Modified version of the freefall game from class.
** Author: Jeremy Glebe
** File: gameover.js
** Purpose: A screen to display after the player has died with score
**     and "try again" message.
*/

var gameOver = {

	create: function () {
		console.log("gameover.js");
		game.stage.backgroundColor = BG_COLOR
		// Bg image
		this.bg = game.add.image(0, 0, 'bg')

		var w = game.width
		var h = game.height

		// Title
		var logo = game.add.bitmapText(w / 2, -100, 'fontUsed', '', 75)
		logo.text = GAMETITLE
		logo.anchor.setTo(0.5, 0.5)
		game.add.tween(logo).to({
			y: h / 2 - 80
		}, 1000, Phaser.Easing.Bounce.Out).start()

		if (game.global.score > game.global.best_score) {
			var message = game.add.bitmapText(w / 2, -100, 'fontUsed', '', 30)
			message.text = 'New record!!! \nYou scored: ' + game.global.score + '\nTap to try again'
			message.anchor.setTo(0.5, 0.5)
			game.add.tween(message).to({
				y: h / 2 - 20
			}, 1000, Phaser.Easing.Bounce.Out).start()
		} else {
			var message = game.add.bitmapText(w / 2, -100, 'fontUsed', '', 30)
			message.text = 'Game Over \nYou scored: ' + game.global.score + '\nBest: ' + game.global.best_score + '\nTap to try again'
			message.anchor.setTo(0.5, 0.5)
			game.add.tween(message).to({
				y: h / 2 - 20
			}, 1000, Phaser.Easing.Bounce.Out).start()
		}

		if (game.global.score > game.global.best_score) {
			game.global.best_score = game.global.score
		}

		game.input.onDown.add(this.listener, this)
	},

	//Changed
	/* Function: listener()
	** Description: Restarts the game on tap/click
	*/
	listener: function () {
		game.sound.stopAll();
		// Reset values
		game.global.score = 0;
		game.global.g_speed = 1;
		game.global.ob_frames = 120;
		BG_COLOR = COLORS_PASTEL[Math.floor(Math.random() * (COLORS_PASTEL.length - 1))]
		//Return to the menu after the game over. Just thought it seemed nicer
		game.state.start('mainMenu')
	}

}