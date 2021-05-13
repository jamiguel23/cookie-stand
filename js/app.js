'use strict';


// proof of life, rn my POL does not work in the live server extension but works when it is deployed ti GitHub
console.log('hello');

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log(hours);

// created seattle object
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  avgCookSoldEachArray : [],
  avg: 6.3,
  getRandomCust: function () {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
  },
  getRandomCookPerHour: function () {

    return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
  },
  pushSoldArray: function () {

    this.pushSoldArray.push(this.getRandomCookPerHour());
  }
};

console.log(seattle);

console.log(seattle.getRandomCust());
console.log(seattle.getRandomCookPerHour());
console.log(seattle.pushSoldArray());
