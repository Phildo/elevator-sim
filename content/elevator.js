var Elevator = function(building)
{
  this.activityQ = new LinkedList("ELEVATOR_QUEUE");
  //this.currentFloor = building.floors[0];

  this.draw = function(canv)
  {
    canv.strokeStyle = "#000000";
    //canv.strokeRect();

  };
};
