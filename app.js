'use strict';


// Написать функцию, которая будет принимать имя пользователя, и выводить
// строку с приветствием данного пользователя, если имени пользователя нет,
// выводить приветствие гостя.
let userOne = {
	name: 'Alex',
	age: 25,
};
function messageHelloUser (user) {
	if (!user.name) {
		console.log(`Hello guest!`);
	} else {
		console.log(`Hello ${user.name}!`);
	}
} 
messageHelloUser(userOne);


// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица
let averege = (a, b = 1) => {
	let result = a**b;
	console.log(result);
	return result;
}
averege(2, 3);


// Написать функцию, которая будет принимать в качестве входного параметра
// массив любых, целых чисел, и будет возвращать среднее арифметическое
// значение данного массива*
let newArr = ["1",2,"3",4,"apple", null];

function arrowAveregeValue(a) {
	let sum = 0;
	let p = 0;
	for(let i = 0; i < a.length; i++){
		let bool = Number.isInteger(parseInt(a[i]));
		if(bool) {
			sum += parseInt(a[i]);
		}
		else {
			p ++;
		}
	}
	let averege = sum / (a.length - p);
	console.log(averege);
	return averege;
}

arrowAveregeValue(newArr);


//Напишите стрелочную функцию которая будет выводить переданную строку в
// консоль n раз
const stringMassege = (message, count) => {
	let i = 0;
	while (i < count) {
		i++;
		console.log(message);
	} 
}
stringMassege('Hello!', 5);



// Напишите стрелочную функцию, которая будет принимать в качестве параметра
// букву и если она гласная, функция будет возвращать true, в противном случае
// false .


// 1.	Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. func1
function finc1(a) {
	let b = a**2;
	console.log(b);
	return b;
}
finc1(3);


// 2.	Сделайте функцию, которая возвращает сумму двух чисел. func2
function finc2(a, b) {
	let c = a + b;
	console.log(c);
	return c;
}
finc2(3, -7);

// 3.	Сделайте функцию, которая отнимает от первого числа второе и делит на третье. func3
function finc3(a, b, c) {
	let d = (a - b) / c;
	console.log(d);
	return d;
}
finc3(20, 4, 2);


// 4.	Сделайте функцию, которая принимает параметром число от 1 до 7,
//  а возвращает день недели на русском языке.
function dayOfWeek(a){
	if(a>=1 && a <=7) {
		let day = "";
		if(a == 1) {
			day = "Понедельник";
			console.log(day);
		} else if(a == 2) {
			day = "Вторник";
			console.log(day);
		} else if(a == 3) {
			day = "Среда";
			console.log(day);
		} else if(a == 4) {
			day = "Четверг";
			console.log(day);
		} else if(a == 5) {
			day = "Пятница";
			console.log(day);
		} else if(a == 6) {
			day = "Суббота";
			console.log(day);
		} else if(a == 7) {
			day = "Воскресенье";
			console.log(day);
		}} else {
			let massege = "Введите число от 1 до 7!";
			console.log(massege);
			return massege;
	}
}
dayOfWeek(8);


// 5.	Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false.
function equallyTwoNumber(a, b) {
	let equally = null;
	if(a===b) {
		equally = true;
	} else {
		equally = false;
	}
	console.log(equally);
	return equally;
}
equallyTwoNumber(3, -3);

// 6.	Сделайте функцию, которая параметрами принимает 2 числа. 
// Если их сумма больше 10 - пусть вернет true, а если нет то - false.
function moreThanTen(a, b) {
	let param = null;
	if(a + b > 10) {
		param = true;
	} else {
		param = false;
	}
	console.log(param);
	return param;
}
moreThanTen(4, 7);

// 7.	Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
// Если отрицательное - пусть функция вернет true, а если нет - false.
function negativeNumber(a) {
	let b = null;
	if(a < 0) {
		b = true;
	} else {
		b = false;
	}
	console.log(b);
	return b;
}
negativeNumber(3);

// 8.	Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(a) {
	let b = null;
	if(a > 0 && a < 10) {
		b = true;
	} else {
		b = false;
	}
	console.log(b);
	return b;
}
isNumberInRange(23);

// 9.	Дан массив с числами. Запишите в новый массив только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную 
// функцию isNumberInRange из предыдущей задачи.


// 10.	Сделайте функцию getDigitsSum (digit - это цифра), которая параметром 
// принимает целое число и возвращает сумму его цифр.


// 11.	Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.


// 12.	 Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: 
// четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(a) {
	let b = null;
	if(a % 2 === 0) {
		b = true;
	} else {
		b = false;
	}
	console.log(b);
	return b;
}
isEven(10);

// 13.	 Дан массив с целыми числами. Создайте из него новый массив, 
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию 
// isEven из предыдущей задачи.


// 14.	Сделайте функцию getDivisors, которая параметром принимает число и 
// возвращает массив его делителей (чисел, на которое делится данное число).


// 15.	Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять 
// сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).


// 16.	Напишите стрелочную функцию, которая будет возвращать true если 
// строка является палиндромом и false в противном случаею