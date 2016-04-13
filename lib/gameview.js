(function (root) {

  var BubbleTrouble = root.BubbleTrouble = root.BubbleTrouble || {};

  BubbleTrouble.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.running = false;
  };

  BubbleTrouble.GameView.prototype.start = function () {
    window.requestAnimationFrame(function() {
      this.game.step();
      this.running = true;
      this.game.draw(c);
      if (this.game.bubbles.length === 0) {
        $("#won-message").show();
      }
      if (!this.game.lost) {
        this.start();
      } else {
        $("#lost-message").show();
        this.running = false;
      }
    }.bind(this));
  };

}) (this);