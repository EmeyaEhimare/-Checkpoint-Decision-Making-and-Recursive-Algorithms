// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. 
// Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ticket Pricing: Write a program that prompts the user to enter their age and
//  then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number.
//  The Fibonacci sequence starts with 0 
//  and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

