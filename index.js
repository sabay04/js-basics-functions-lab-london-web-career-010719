// Code your solution in this file!

function distanceFromHqInBlocks(num) {

  if (num > 42) {
    return num - 42;
  } else if ( num < 42) {

    return 42 - num;
  }

}


function distanceFromHqInFeet(num) {

    return distanceFromHqInBlocks(num) * 264;

}

function distanceTravelledInFeet(a, b) {

  if (a > b) {
    return (a - b)*264;
  } else if ( a < b) {

    return (b - a)* 264;
  }

}

function calculatesFarePrice(start, destination) {

  let distanceTravelled = distanceTravelledInFeet(start, destination)

    if ( 400 >= distanceTravelled ) {

        return 0;
    } else if ( distanceTravelled > 400 && distanceTravelled < 1999 ) {

        return (distanceTravelled - 400)* 0.02;

    } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {

      return 25;
    } else {

      return 'cannot travel that far'
    }


}
