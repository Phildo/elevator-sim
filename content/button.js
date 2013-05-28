var Button = function(floor)
{
  this.pressed = false;

  this.button_bg = new Image();
  this.button_fg = new Image();
  this.button_bg.src =  "assets/button.png";
  this.button_fg.src =  "assets/"+floor+".png";

  this.press = function()
  {
    this.pressed = true;
    this.button_bg.src = "assets/litbutton.png";
  };

  this.release = function()
  {
    this.pressed = false;
    this.button_bg.src = "assets/button.png";
  };

  this.draw = function(canv, offsetx, offsety)
  {
    canv.context.drawImage(this.button_bg, offsetx, offsety);
    canv.context.drawImage(this.button_fg, offsetx, offsety);
  };
};
