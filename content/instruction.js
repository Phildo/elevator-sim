var Instruction = function()
{
  this.floor = null;

  this.isMetBy = function(elevator)
  {
    return (this.floor == elevator.currentFloor);
  };
};
