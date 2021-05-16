'use strict';


// proof of life, rn my POL does not work in the live server extension but works when it is deployed ti GitHub
console.log('hello');

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);

// const seattleList = document.getElementById('seattle-list');
// const tokyoList = document.getElementById('tokyo-list');
// const dubaiList = document.getElementById('dubai-list');
// const parisList = document.getElementById('paris-list');
// const limaList = document.getElementById('lima-list');

// const cookieTable = document.querySelector('table');
const cookieTable = document.getElementById('cookie-table');
console.log(cookieTable);

// let hourTotals = [];

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
new Store('Seattle', 23, 65, 6.3);




// // created seattle object
// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   dailyTotal: 0,
//   avgCookSoldEachArray: [],
//   avg: 6.3,
//   getRandomCust: function () {

//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//   },
//   getRandomCookPerHour: function () {

//     return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//   },
//   pushSoldArray: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//     }
//   },
//   totalCookSales: function () {
//     for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//       this.dailyTotal += this.avgCookSoldEachArray[i];
//     }
//   },

// };



// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   dailyTotal: 0,
//   avgCookSoldEachArray: [],
//   avg: 1.2,
//   getRandomCust: function () {

//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//   },
//   getRandomCookPerHour: function () {

//     return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//   },
//   pushSoldArray: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//     }
//   },
//   totalCookSales: function () {
//     for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//       this.dailyTotal += this.avgCookSoldEachArray[i];
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     tokyoList.appendChild(liTotal);
//   }

// };


// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   dailyTotal: 0,
//   avgCookSoldEachArray: [],
//   avg: 3.7,
//   getRandomCust: function () {

//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//   },
//   getRandomCookPerHour: function () {

//     return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//   },
//   pushSoldArray: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//     }
//   },
//   totalCookSales: function () {
//     for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//       this.dailyTotal += this.avgCookSoldEachArray[i];
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     dubaiList.appendChild(liTotal);
//   }

// };

// let paris = {
//   name: 'Paris',
//   min: 11,
//   max: 38,
//   dailyTotal: 0,
//   avgCookSoldEachArray: [],
//   avg: 3.7,
//   getRandomCust: function () {

//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//   },
//   getRandomCookPerHour: function () {

//     return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//   },
//   pushSoldArray: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//     }
//   },
//   totalCookSales: function () {
//     for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//       this.dailyTotal += this.avgCookSoldEachArray[i];
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//       parisList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     parisList.appendChild(liTotal);
//   }

// };

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   dailyTotal: 0,
//   avgCookSoldEachArray: [],
//   avg: 4.6,
//   getRandomCust: function () {

//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //The maximum is inclusive and the minimum is inclusive
//   },
//   getRandomCookPerHour: function () {

//     return Math.round(this.getRandomCust() * this.avg); // This should find a single average day
//   },
//   pushSoldArray: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookSoldEachArray.push(this.getRandomCookPerHour()); //for loop to go the length of hours array to assign it a random daily average
//     }
//   },
//   totalCookSales: function () {
//     for (let i = 0; i < this.avgCookSoldEachArray.length; i++) {
//       this.dailyTotal += this.avgCookSoldEachArray[i];
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.getRandomCookPerHour()} cookies`;
//       limaList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     limaList.appendChild(liTotal);
//   }

// };

// seattle.pushSoldArray();
// seattle.totalCookSales();
// seattle.render();

// tokyo.pushSoldArray();
// tokyo.totalCookSales();
// tokyo.render();

// dubai.pushSoldArray();
// dubai.totalCookSales();
// dubai.render();

// paris.pushSoldArray();
// paris.totalCookSales();
// paris.render();

// lima.pushSoldArray();
// lima.totalCookSales();
// lima.render();
