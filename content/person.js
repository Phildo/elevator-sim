var Person = function()
{
  this.icon = new Image();
  this.icon.src =  "assets/man.png";

  this.thought = new Image();
  this.thought.src = "assets/bubble.png";

  this.draw = function(canv, offsetx, offsety)
  {
    canv.context.drawImage(this.icon, offsetx, offsety);
    canv.context.drawImage(this.icon, offsetx, offsety);
    canv.context.drawImage(this.thought, offsetx-24, offsety-32);
  };
};
