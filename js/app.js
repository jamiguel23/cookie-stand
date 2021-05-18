'use strict';


// proof of life, rn my POL does not work in the live server extension but works when it is deployed ti GitHub
console.log('hello');

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);

const cookieTable = document.getElementById('cookie-table');
console.log(cookieTable);

//create constructor notation for all Stores
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.avgCookSoldEachArray = [];
  this.dailyTotal = 0;
  this.getRandomCust = function () {

    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
  };
  this.getRandomCookPerHour = function () {

    return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
  };
  this.pushSoldArray = function () {
    for (let i = 0; i < hours.length; i++) {
      this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
    }
  };
  this.totalCookSales = function () {
    this.pushSoldArray();
    for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
      this.dailyTotal += this.avgCookSoldEachArray[i];
    }
  };

  this.render();
}



Store.prototype.render = function () {
  this.totalCookSales();
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.avgCookSoldEachArray[i];
    tr.appendChild(td);
    // this.hourTotals += this.avgCookSoldEachArray[i];
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  cookieTable.appendChild(tr);

};


function opHours() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  thead.appendChild(th);
  // td.textContent = this.name;
  // thead.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    thead.appendChild(th);
    // this.hourTotals += this.avgCookSoldEachArray[i];
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  thead.appendChild(th);
  cookieTable.appendChild(thead);
}

//WIP have not figuired out the total footer data.
function footerTotal() {
  let tfoot = document.getElementById('tfoot');
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  // let td = document.createElement('td');
  let th = document.createElement('th');
  tfoot.appendChild(th);
  // td.textContent = this.name;
  // thead.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tfoot.appendChild(th);
  }
}

footerTotal();
opHours();


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


