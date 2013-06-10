var Building = function(numfloors)
{
  this.floors  = [];
  this.buttons = [];
  for(var i = 1; i <= numfloors; i++)
  {
    this.floors[i] = new Floor(i);
    this.buttons[i] = new Button(i);
  }
  this.elevator = new Elevator(this);

  this.tick = function()
  {
    this.elevator.tick();
  };

  this.draw = function(canv)
  {
    canv.context.strokeStyle = "#000000";
    for(var i = 1; i < this.floors.length; i++)
    {
      this.floors[i].draw(canv);
      this.buttons[i].draw(canv, 16+(((i+1)%2)*(BUTTON_SIZE+5)), BUTTON_SIZE*Math.ceil(i/2)+16);
    }
    this.elevator.draw(canv);
  };
};
