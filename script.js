// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 10; i++) {
    if (i === 0){
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`); 
    }
}
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array_1 = [1, 2, 3, 4, 5, 6, 7];
array_1.splice(3, 2);
console.log(array_1);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// задаем массив
function randomArray(length) {
    const array_2 = [];
    for (let i = 0; i < length; i++) {
        array_2.push(Math.ceil(Math.random() * 9)); 
    }
    return array_2;
}
let length = prompt('Введите длинну массива: ');
const myArr = randomArray(length);
console.log(`Сгенерирован массив - [${myArr}]`);

// 1. Рассчитать сумму элементов этого массива
function sum (array_2) {
    let count = 0;
    for (let i = 0; i < array_2.length; i++) {
        count+=array_2[i];
    }
    return count;
}
console.log(`Сумму элементов массива - [${sum(myArr)}]`);

// 2. Найти минимальное число
function min(array_2) {
    const min = Math.min(...array_2);
    return min;
}
console.log(`Минимальное число массива - [${min(myArr)}]`);

// 3. Найти есть ли в этом массиве число 3
function presenceNumber(number) {
    if (number > 0) {
        return `В массиве присутствует цифра 3 в количистве - ${number} шт.`
    } else {
        return `В массиве нет цифр 3`
    }
}
function three(array_2) {
    count = 0;
    for (let i = 0; i < array_2.length; i++) {
        if (array_2[i] === 3) {
            count++;
        }
    }
    return presenceNumber(count);
}
console.log(three(myArr));


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i <= 20; i++) {
    let count = ''
    for (let j = 0; j <= i; j++) {
        count +='x';    
    }
    console.log(count);
}