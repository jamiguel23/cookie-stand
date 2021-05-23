'use strict';


// proof of life, rn my POL does not work in the live server extension but works when it is deployed ti GitHub
console.log('hello');

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);
let allStores = [];

let tfoot = document.getElementById('tfoot');

const cookieTable = document.getElementById('cookie-table');
console.log(cookieTable);

const cookieForm = document.getElementById('form'); //get foothold to sales.HTML using id form
console.log(cookieForm); //POL

let newStore = [];
//create constructor notation for all Stores
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  allStores.push(this);
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


// WIP have not figuired out the total footer data.
function footerTotal() {
  let tfoot = document.getElementById('tfoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Hourly Total';
  tr.appendChild(td);
  // td.textContent = this.name;
  // thead.appendChild(th);
  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let colTotal = 0;
    let td = document.createElement('td');
    for (let j = 0; j < allStores.length; j++) {
      colTotal += allStores[j].avgCookSoldEachArray[i];

    }
    td.textContent = colTotal;
    tr.appendChild(td);
    grandTotal += colTotal;

  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
  tfoot.appendChild(tr);
}

// defining event handler
function handleSubmit(event){
  event.preventDefault();
  //event.target.<name>.value
  console.log(event.target.name.value);
  console.log(event.target.min.value);
  console.log(event.target.max.value);
  console.log(event.target.avg.value);

  let name = event.target.name.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;

  tfoot.innerHTML = '';
  newStore.push([name, min, max, avg]);

  new Store(name, min, max, avg);
  footerTotal();
}



opHours();


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

footerTotal();


// added event listener

cookieForm.addEventListener('submit', handleSubmit);

