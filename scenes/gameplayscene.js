var GamePlayScene = function(game, canv)
{
  var building = new Building();

  this.ready = function()
  {
  };

  this.tick = function()
  {
  };

  this.draw = function()
  {
    //ground
    canv.context.strokeStyle = "#000000";
    canv.context.beginPath();
    canv.context.moveTo(0,canv.canvas.height-20);
    canv.context.lineTo(canv.canvas.width,canv.canvas.height-20);
    canv.context.stroke();
  };

  this.cleanup = function()
  {
    canv.context.fillStyle = "#FFFFFF";
    canv.context.fillRect(0,0,canv.canvas.width,canv.canvas.height);
  };
};
