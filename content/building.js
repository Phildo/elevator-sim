var Building = function(floors)
{
  this.floors = [];
  for(var i = 0; i < floors; i++)
    this.floors[i] = new Floor(i);
};
