// Bài 1: Kiểm tra số nguyên tố
var n = 10;
var isPrime = true;

if (n <= 1) {
    console.log(n + " is not a prime");
} else {
    for (var i = 2; i <= n ** 0.5; i++) { 
        if (n % i === 0) {
            isPrime = false;
            break; 
        }
    }
    if (isPrime) {
        console.log(n + " is a prime");
    } else {
        console.log(n + " is not a prime");
    }
}

// Bài 2: Tìm số chính phương
var n = 15;
var isSquareNumber = false;

if (n < 0) {
    console.log(n + " is not a square number");
} else {
    for (var i = 0; i <= n; i++) {
        if (i ** 2 === n) {
            isSquareNumber = true;
            break;
        }
    }
    if (isSquareNumber) {
        console.log(n + " is a square number");
    } else {
        console.log(n + " is not a square number");
    }
}

// Bài 3: Tìm số hoàn hảo
var n = 10;
var sum = 0;

for (var i = 1; i < n; i++) {
    if (n % i === 0) {
        sum += i;
    }
}

if (sum === n) {
    console.log(n + " is a perfect number");
} else {
    console.log(n + " is not a perfect number");
}
