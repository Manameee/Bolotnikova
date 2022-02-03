// if(browser == 'Edge') {
// alert("You've got the Edge!");
// } 
// else if (browser == 'Chrome' ||
//     browser == 'Firefox' ||
//     browser == 'Safari'
//     || browser == 'Opera') 
// {
//     ert( 'Okay we support these browsers too' );
// } 
// else {
//     alert( 'We hope that this page looks ok!' );
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
// }

// function min(a, b) {
//     return a < b ? a : b;
// }

// for (var i = 1; i <= 50; i++) {
// 	document.write(i + '<br>');
// }

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	document.write(arr[i] + '<br>');
// }

// var result = 1;
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	result = result * arr[i];
// }
// alert(result);

// var obj = {
// 	'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };

// for (var key in obj) {
// 	alert(key + ' - это ' + obj[key] + '.');

// 1
// for (var i = 1; i <= 100; i++) {
// 	document.write(i + '<br>');
// }

// 2
// for (var i = 11; i <= 33; i++) {
// 	document.write(i + '<br>');
// }

// 3
// var i = 0;
// while (i <= 100) {
//   document.write(i + '<br>');
//   i +=2;
// }


// 4
// var i = 0, suma = 0;
// while (i <= 100) {
//   document.write(suma + '<br>');
//   i ++;
//   suma += i;
// }

// for (var i = 0; i <= 100; i++) {
//     sum += i;
//  }


// 5
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + '<br>');
// }

// 6
var sum = 0 , i = 0 , arr = [1, 2, 3, 4, 5];
while (i < arr.length) {
  document.write(arr[i] + '<br>');
  i++;
  sum += i;
}