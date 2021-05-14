'use strict';


// proof of life, rn my POL does not work in the live server extension but works when it is deployed ti GitHub
console.log('hello');

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);

const seattleList = document.getElementById('seattle-list');
console.log(seattleList);

// created seattle object
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  dailyTotal: 0,
  avgCookSoldEachArray: [],
  avg: 6.3,
  getRandomCust: function () {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
  },
  getRandomCookPerHour: function () {

    return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
  },
  pushSoldArray: function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
    }
  },
  totalCookSales: function () {
    for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
      this.dailyTotal += this.avgCookSoldEachArray[i];
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
      seattleList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(liTotal);
  }

};



seattle.pushSoldArray();
seattle.totalCookSales();
console.log(seattle);
console.log(seattle.getRandomCust());
console.log(seattle.getRandomCookPerHour());
console.log(seattle.avgCookSoldEachArray);
console.log(seattle.dailyTotal);
seattle.render();



// 1. create element
let section = document.createElement('section');
// 2. give content
//3. append to the DOM
seattleList.appendChild(section); //POL
