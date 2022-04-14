/**
 * Khối 1:
 *  luong1Ngay
 *  soNgayLam
 * 
 * Khối 2:
 *  b1: tạo biến và gán giá trị
 *  b2: xây dựng công thức
 *  tongLuong = luong1Ngay * soNgayLam
 *  b3: hiển thị kết quả
 * 
 * Khối 3: 
 *  tongLuong  
 */

//B1
var luong1Ngay = 100000;
var soNgayLam = 5;
var tongLuong = 0;

//B2 
tongLuong = luong1Ngay *  soNgayLam;

//B3
// toLocaleString: hiển thị dấu chia phần ngàn cho number
console.log("Tổng lương: " + tongLuong.toLocaleString() + "VND")