var Floor = function(level)
{
  this.level = level;
  this.upbutton   = new Button('up');
  this.downbutton = new Button('down');

  this.draw = function(canv)
  {
      this.upbutton.draw(  canv, (canv.canvas.width/2)-(FLOOR_WIDTH/2)+3, canv.canvas.height-20-( level   *FLOOR_HEIGHT)+3);
      this.downbutton.draw(canv, (canv.canvas.width/2)-(FLOOR_WIDTH/2)+3, canv.canvas.height-20-((level-1)*FLOOR_HEIGHT)-BUTTON_SIZE-1);
      canv.context.strokeStyle = "#000000";
      canv.context.strokeRect((canv.canvas.width/2)-(FLOOR_WIDTH/2), canv.canvas.height-20-(level*FLOOR_HEIGHT), FLOOR_WIDTH, FLOOR_HEIGHT);
  };
};
