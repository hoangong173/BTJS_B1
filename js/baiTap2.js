/**
 * Khối 1:
 *  var num1 .... num5
 * Khối 2:
 *  trungBinh = (num1 + num2 + num3 + num4 + num5) / 5
 * Khối 3:
 *  trungBinh
 */

//B1
var num1 = 5.56;
var num2 = 6.52;
var num3 = 7.54;
var num4 = 8.58;
var num5 = 9.59;
var trungBinh = 0;

//B2
trungBinh = (num1 + num2 + num3 + num4 + num5) / 5
//B3
console.log("Số trung bình: " + trungBinh)

console.log("Làm tròn " + Math.round(trungBinh)  )

console.log("Làm tròn,lấy bn số sau dấu chấm " + trungBinh.toFixed(2)  )