
// class work april 12

// 1. Write a program that checks if a given number is even or odd.

function checkEvenOdd(num){ 
    if (num%2===0){
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOdd(12));
console.log(checkEvenOdd(10));

// 2. Create a function that takes two numbers as parameters and returns the larger one.

function checkLarge(a,b){
    if (a>b){
        return "a is large"
    }
    else {
        return "b is large"
    }
}
console.log(checkLarge(12,1));


// 3. Write a function that determines if a given year is a leap year.

function checkLeapYear(Year){
    if ((Year%400==0) || (Year%4==0 && Year%100!==0)){

        return "Leap Year"
    }
    else{
        return "Not Leap Year"
    }
}
console.log(checkLeapYear(1996));

// 4. Implement a program that checks whether a given character is a vowel or consonant.

function checkVowel(a){
   
        if (a==="a" || a==="i" || a==="e" || a==="o" || a==="u"){
            return "Vowel"
        }
        else {
            return "Consonant"
        }  
}
console.log(checkVowel("b"));

// 5. Create a function that takes three numbers as input and returns the largest among them.

function checkLargest(a,b,c){
    if (a>b && a>c){
        return "a is largest"
    }
    else if (b>a && b>c){
        return "b is largest"
    }
    else {
        return "c is largest"
    }
}
console.log(checkLargest(12,14,1))

// 6. Write a program that checks if a given number is positive, negative, or zero.

function checkPositive(n){
    if (n>0){
        return "Positive"
    }
    else if (n<0){
        return "Negative"
    }
    else{
         return "Zero"
    }
}
console.log(checkPositive(-3))

// 7. Implement a function that calculates the grade of a student based on their score.

function checkGrade(num){
    if (num>90){
        return "A"
    }
    else if (num>80){
        return "B"
    }
    else if (num>70){
        return "C"
    }
    else if (num>60){
        return "D"
    }
    else {
        return "E"
    }
}
console.log(checkGrade(98));

// 8. Create a program that determines if a given string is a palindrome.

// 1 way

function checkPalin(str){
    let a=[];
    let length=str.length
    for (let i=0; i<str.length; i++){
        a.push(str[str.length-i-1]);
    }
    a = a.join("");
    if (a===str){
        return "Palindrome";
    }
    else {
        return "Not palindrome";
    }
}
console.log(checkPalin("MoM"));

// 2 way

function checkPalin(str){
    let a=[];
    a=str.split('').reverse().join('');
    if (a===str){
        return "Paliin";
    }
    else {
        return "Not Pallin";
    }
}
console.log(checkPalin("mom"));

// 9. Write a function that checks whether a person is eligible to vote based on their age.

function checkVote(num){
    if (num>=18){
        return "Can Vote"
    }
    else {
        return "Can't Vote"
    }
}
console.log(checkVote(2));

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.""

function checkTraingle(a,b,c){
    if (a===b){
        if (b===c){
            return "Equilateral Triangle"
        }
        else {
            return "Isoceles Triangle"
        }
    }
    else if (b===c){
        return "Isoceles Triangle"
    }
    else {
        return "Scalene Triangle"
    }
}
console.log(checkTraingle(5,5,4));
