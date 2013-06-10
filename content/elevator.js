var Elevator = function(building)
{
  this.activityQ = new LinkedList("ELEVATOR_QUEUE");
  this.currentFloor = building.floors[1];
  this.currentInstruction = null;
  this.floorOffset = 0;

  this.tick = function()
  {
    if(this.currentInstruction && this.currentInstruction.isMetBy(this))
    {
      this.currentInstruction = null;
    }
    else if(this.currentInstruction)
    {
      if(this.currentInstruction.floor.level > this.currentFloor.level)
      {
        this.floorOffset -= 0.02;
        if(this.floorOffset < -1.0)
        {
          this.currentFloor = building.floors[this.currentFloor.level+1];
          this.floorOffset = 0;
        }
      }
      if(this.currentInstruction.floor.level < this.currentFloor.level)
      {
        this.floorOffset += 0.02;
        if(this.floorOffset > 1.0)
        {
          this.currentFloor = building.floors[this.currentFloor.level-1];
          this.floorOffset = 0;
        }
      }
    }
    else if(this.currentInstruction = this.activityQ.firstMember())
    {
      this.activityQ.remove(this.currentInstruction);
    }
  };

  this.draw = function(canv)
  {
    canv.strokeStyle = "#000000";
    canv.context.strokeRect((canv.canvas.width/2)-(FLOOR_WIDTH/2)+(FLOOR_WIDTH/2), canv.canvas.height-20-(this.currentFloor.level*FLOOR_HEIGHT)+(this.floorOffset*FLOOR_HEIGHT), FLOOR_WIDTH/2, FLOOR_HEIGHT);
  };
};
