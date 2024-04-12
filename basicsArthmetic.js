// 1. Given length and breadth of a rectangle, return the area of the rectangle.

function area(a,b){
    return a*b;
}
console.log(area(2,3));

// 2. Take a number and print the square of the number.

function square(a){
    return a**a
}
console.log(square(2));

// 3. Take two numbers and only print the integer part when a is divided by b.

function integer(a,b){
    return Math.floor(a/b);
}
console.log(integer(12,5));

// 4. Take a number and print out the last digit of the number.

function lastDigit(a){
    return a%10;
}
console.log(lastDigit(12));

// 5. Take a number and find the cube of that number.

function cube(c){
    return c*c*c;
}
console.log(cube(3));

// 6. Take a 3 digit number and print the reverse of that number. Ex - 235 = 532

function reverseNumber(number) {
   const reverse=parseInt(number.toString().split('').reverse().join(''));
   return reverse;
}
console.log(reverseNumber(235));



// 7. Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7
function printnumber(number){
    let p=number.toString();
    for(let i=0;i<p.length;i++){
        return parseInt(p[i]);
    }
}console.log(printnumber(789));


// 8. Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
function sum(number){
    let p=number.toString();
    let r=p.length;
    for(let i=0;i<r;i++){
        return parseInt(p[i])+parseInt(p[r-i-1]);
    }
}console.log(sum(10));

// 9. Take salary of five employees and print the average salary of all the employees.
function avg(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log(avg(1,2,3,4,5));

// 10. Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;
function swap(a,b){
    let c;
    c=a;
    a=b;
    b=c;
    return (a,b)
}
console.log(swap(2,3));
