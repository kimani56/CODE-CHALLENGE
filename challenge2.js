// ask the user for input
var speed = parseInt(prompt("Enter the car's speed (in km/h):"));

// enter the speed limit and the demerit points increment
var speedLimit = 70;
var demeritPointsIncrement = 5;

// Calculate the demerit points
var demeritPoints = 0;
if (speed >= speedLimit) {
  demeritPoints = Math.floor((speed - speedLimit) / demeritPointsIncrement);
}

// Output the result
if (demeritPoints === 0) {
  console.log("Ok");
} else {
  console.log("Demerit points:", demeritPoints);
}