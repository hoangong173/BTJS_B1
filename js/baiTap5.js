/**
 * Khối 1:
 *  number
 *  ten
 *  unit
 *  sum 
 * Khối 2:
 *  ten = floor(number/10)
 *  unit = number % 10
 *  sum = ten + unit
 * Khối 3:
 *  sum
 *  
 */

//B1
var number = 45
var ten = 0;
var unit = 0;
var sum = 0;
//B2
ten = Math.floor(number/10);
unit = number % 10;
sum = ten + unit;
//B3
console.log("Tổng 2 chữ số: " + sum)