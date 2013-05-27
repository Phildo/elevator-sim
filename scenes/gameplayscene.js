var GamePlayScene = function(game, canv)
{
  this.world = new World();

  this.ready = function()
  {
    canv.context.fillStyle = "#FFFFFF";
    canv.context.fillRect(0,0,canv.canvas.width,canv.canvas.height);
  };

  this.tick = function()
  {
    //ground
    canv.context.strokeStyle = "#000000";
    canv.context.beginPath();
    canv.context.moveTo(0,canv.canvas.height);
    canv.context.lineTo(canv.canvas.width,canv.canvas.height);
    canv.context.stroke();
  };

  this.cleanup = function()
  {
  };
};
