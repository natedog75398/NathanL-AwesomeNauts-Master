game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		me.levelDirector.loadLevel("Level01");
		//loading "level01" one game is loaded

		this.resetPlayer(0, 420);

		

		var gameTimerManager = me.pool.pull("GameTimerManager", 0, 0, {});
		me.game.world.addChild(gameTimerManager, 0);


		var heroDeathManager = me.pool.pull("HeroDeathManager", 0, 0, {});
		me.game.world.addChild(heroDeathManager, 0);

		var experienceManager = me.pool.pull("ExperienceManager", 0, 0, {});
		me.game.world.addChild(experienceManager, 0);

		var spendGold = me.pool.pull("SpendGold", 0, 0, {});
		me.game.world.addChild(spendGold, 0);


		me.input.bindKey(me.input.KEY.B, "buy");
		me.input.bindKey(me.input.KEY.Q, "skill");
		me.input.bindKey(me.input.KEY.W, "skill2");
		me.input.bindKey(me.input.KEY.E, "skill3");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		//binds the right key for movement
		//click right key to walk right
		me.input.bindKey(me.input.KEY.LEFT, "left");
		//binds the left key for movement
		//click left key to walk left
		me.input.bindKey(me.input.KEY.SPACE, "jump");
		//binds the space bar key for jumping
		//click space bar to jump
		me.input.bindKey(me.input.KEY.A, "attack");
		//making player attack by pressing A

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},

	resetPlayer: function(x, y){
		//where we put player after reset
		game.data.player = me.pool.pull("player", x, y, {});
		//pulling instince of the player
		//pulling player out of the pool

		me.game.world.addChild(game.data.player, 5);
		//addChild is adding player to world
		//higher the number the closer player is to the screen
	}
});
