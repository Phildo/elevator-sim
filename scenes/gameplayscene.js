var GamePlayScene = function(game, canv)
{
  var building;
  var person;

  this.ready = function()
  {
    building = new Building(9);
    person = new Person();
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

    building.draw(canv);
    person.draw(canv,70,canv.canvas.height-37);
  };

  this.cleanup = function()
  {
    canv.context.fillStyle = "#FFFFFF";
    canv.context.fillRect(0,0,canv.canvas.width,canv.canvas.height);
  };
};
