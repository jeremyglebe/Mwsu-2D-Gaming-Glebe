/* Program: Assignment 03 - Freefall Game
** Description: Modified version of the freefall game from class.
** Author: Jeremy Glebe
** File: boot.js
** Purpose: Sets up screen, loads in the loading bar. This is unmodified.
*/

var boot = {
	preload: function () {
		console.log("boot.js")
		game.load.image('loading_border', 'images/loading_border.png')
		game.load.image('loading', 'images/loading_interior.png')
	},
	create: function () {

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

		if (this.isDeviceMobile()) // if mobile
		{
			console.log(this.isDeviceMobile());
			// using outerWidth fixes the scaling problem in mobile devices. FINALLY SOLVED THIS CRAP!
			this.scale.minWidth = window.outerWidth
			this.scale.minHeight = window.outerHeight
			this.scale.maxWidth = window.outerWidth
			this.scale.maxHeight = window.outerHeight

			this.scale.minWidth = window.innerWidth
			this.scale.minHeight = window.innerHeight
			this.scale.maxWidth = window.innerWidth
			this.scale.maxHeight = window.innerHeight
		} else // if on computer
		{
			this.scale.minWidth = 320
			this.scale.minHeight = 480
			this.scale.maxWidth = 450
			this.scale.maxHeight = 600
		}

		this.scale.pageAlignHorizontally = true
		this.scale.pageAlignVertically = true
		this.scale.setScreenSize = true
		game.state.start('preload')
	},
	isDeviceMobile: function () {
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		}
		return isMobile.any()
	}
}