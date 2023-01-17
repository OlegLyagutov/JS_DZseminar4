// // Задание 1.
// // 1) Создайте массив с элементами 1, 2, 3. Выведите на 
// // экран каждый из этих элементов.
// // 2) Создайте массив с произвольными элементами. Выведите 
// // на экран количество элементов в этом массиве.
// // 3) Создайте массив с элементами 'a', 'b', 'c'. Запишите 
// // вместо первого элемента число 1, вместо второго - 2, вместо 
// // третьего - 3.
// // 1)
// //вар1.
// const Array = [1, 2, 3];
// console.log(Array[0]);
// console.log(Array[1]);
// console.log(Array[2]);

// //вар2.
// for (let i = 0; i < Array.length; i++) {
//     const element = Array[i];
//     console.log(element);
// }

// //2)
// const ArrNew = [4, 2, 0, 3];
// for (let i = 0; i < ArrNew.length; i++) {
//     console.log(ArrNew.length);
// }
// //3)
// const arrText = [`a`, `b`, `c`];
// arrText[0] = 1;
// arrText[1] = -2;
// arrText[2] = -3;
// console.log(arrText);

// Задание 2.
// 1) Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ 
// увеличьте каждый элемент массива на единицу.
// const array = [1, 2, 3];
// let i=0;
// do {
//     array[i]++;
//     i++;
// } while (i< array.length);
//     console.log(array);
// 2) Узнайте длину следующего массива:

// const arr = [];
// arr[3] = `a`;
// arr[8] = `b`;
// console.log(arr.length);
// console.log(arr);
// 3) Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// console.log(arr);
// arr.push(4);  //arr.push(4, 5);
// arr.push(5);
// console.log(arr);
// 4) Создайте произвольный массив из 5 элементов, Удалите из него два 
// элемента. Проверьте, какое станет значение свойства length после этого.
// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = getRandomInRange(0, 10);
// }
// console.log(arr);
// arr.pop();
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// Задание 3.
// 1) С помощью цикла for выведите в консоль числа от 11 до 33.
// const arrFirst = [];
// for (let i = 11; i <= 33; i++) {
//     arrFirst.push(i);
// }
// console.log(arrFirst);
// 2) С помощью цикла for выведите в консоль нечетные числа в 
// промежутке от 1 до 99.
// const arrSecond = [];
// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//    //!(i % 2)
//         arrSecond.push(i);
//     }
// }
// console.log(arrSecond);
// 3) С помощью цикла for выведите в консоль числа от 100 до 0.
// const arrThird = [];
// // for (let i = 0; i < 100; i--) {
// //     arrThird.push(i);
// // }
// for (let i = 100; i >= 0; i--) {
//     arrThird.push(i);
// }
// console.log(arrThird);
// 4) Дано число num с неким начальным значением. Умножайте его 
// на 3 столько раз, пока результат умножения не станет больше 
// 1000. Какое число получится? Посчитайте количество итераций, 
// необходимых для этого.
// let num = 2;
// let i = 0;
// while (num < 1000) {
//     num *= 3;
//     i++
// }
// console.log(`количество итераций ${i}`);


// Задание 4.
// 1) Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 
// 3-х, но меньше 10.
// const arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (3 <= element && element <= 10)
//     console.log(element);
// }
// arr.forEach(element => {
//     if (3 <= element && element <= 10) {
//     console.log(element);
//     }
// });


// 2) Найдите сумму четных чисел от 2 до 100.
//вар 1.
// let sum = 0;
// for (let i = 2; i <= 100; i+=2) {
//         sum += i;
//     }    

// console.log(sum);

// вар 2.
// let sum = 0;
// for (let i = 2; i <= 100; i= i+2) {
//     if (!(i%2)) {
//         sum += i;
//     }    
// }
// console.log(sum);
// 3) Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
// const arrayFird= [2, 5, 9, 3, 1, 4];
// let sumNew = 0;
// for (let i = 0; i < arrayFird.length; i++) {
//     const element = arrayFird[i];
//     sumNew += element;
// }
// console.log(sumNew);
// 4) С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// let text = `-`;
// for (let i = 1; i <= 9; i++) {
//     text += i + `-`
// }
// console.log(text);
    

// 5) Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите 
// цикл, который будет по очереди выводить элементы этого массива 
// в консоль до тех пор, пока не встретится элемент со значением 0. 
// После этого цикл должен завершить свою работу.
// const arrLast = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < arrLast.length; i++) {
//     const element = arrLast[i];
//     console.log(element);
//     if (element === 0) {
//         break;
//     }
// }

