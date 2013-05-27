var LoadingScene = function(game, canv)
{
  var pad;
  var barw;
  var progress;

  var numimages = 14;
  var imagesloaded = 0;
  var images = [];

  var imageLoaded = function()
  {
    imagesloaded++;
  };

  this.ready = function()
  {
    pad = 20;
    barw = (canv.canvas.width-(2*pad));
    progress = 0;
    canv.context.fillStyle = "#000000";
    canv.context.font = "20px vg_font";
    canv.context.fillText(".",0,0);// funky way to encourage the custom font to load

    for(var i = 0; i < numimages; i++)
    {
      images[i] = new Image();
      images[i].onload = imageLoaded; 
    }
    images[0].src = "assets/eman.png";
    images[1].src = "assets/ethought.png";
    images[2].src = "assets/thought1.png";
    images[3].src = "assets/thought2.png";
    images[4].src = "assets/thought3.png";
    images[5].src = "assets/thought4.png";
    images[6].src = "assets/thought5.png";
    images[7].src = "assets/thought6.png";
    images[8].src = "assets/thought7.png";
    images[9].src = "assets/thought8.png";
    images[10].src = "assets/thought9.png";
    images[11].src = "assets/thoughtangry.png";
    images[12].src = "assets/thoughtfine.png";
    images[13].src = "assets/thoughthappy.png";
  };

  this.tick = function()
  {
    if(progress <= imagesloaded/numimages) progress += 0.01;
    if(progress >= 1.0) game.nextScene();
  };

  this.draw = function()
  {
    canv.context.fillRect(pad,canv.canvas.height/2,progress*barw,1);
    canv.context.strokeRect(pad-1,(canv.canvas.height/2)-1,barw+2,3);
  };

  this.cleanup = function()
  {
    progress = 0;
    imagesloaded = 0;
    images = [];//just used them to cache assets in browser; let garbage collector handle 'em.
    canv.context.fillStyle = "#FFFFFF";
    canv.context.fillRect(0,0,canv.canvas.width,canv.canvas.height);
  };
};
