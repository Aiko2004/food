'use strict';


//JSON

// const person = {
//     name: 'Alex',
//     tel: '+74444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// }

// const clone = (JSON.parse(JSON.stringify(person)));
// clone.parents.mom = 'Ann';
// console.log(person);
// console.log(clone)


// Promise

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Работа сделана');
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`${time}ms`)
//             resolve();
//         }, time);
//     });
// };

// // test(1000).then(() => console.log("1000ms"));
// // test(2000).then(() => console.log("2000ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("All");
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log("race");
// });


// filter
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });

// console.log(answers);


// every / some

// const some = [4, 'qwq', 'sdfsdfsd', 4];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => {
//     return sum + current;
// });

// console.log(res);


// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'person')
//     .map(item => item[0]);

// console.log(newArr);


// const films = [{
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     arr.every(film => film.id || film.id === 0)
// }

// const funds = [
//     { amount: -1400 },
//     { amount: 2400 },
//     { amount: -1000 },
//     { amount: 500 },
//     { amount: 10400 },
//     { amount: -11400 }
// ];

// const getPositiveIncomeAmount = (data) => {
//     return data
//         .filter(item => item.amount >= 0)
//         .map(item => Object.entries(item)[0][1])
//         .reduce((sum, cur) => {
//             return sum + cur;
//         });
// };

// console.log(getPositiveIncomeAmount(funds));

// const getTotalIncomeAmount = (data) => {
//     return data
//         .map(item => Object.entries(item)[0][1])
//         .reduce((sum, cur) => {
//             return sum + cur;
//         });
// };

// console.log(getTotalIncomeAmount(funds));