// // function functon_Nmae(){

// // }



// // let a=12;
// // let b=14;
// // let sum =a+b;
// // console.log ("Sum of two number ",sum)


// //1.


// let a = 12;
// let b = 14;

// function test() {
//     // let sum =a+b;
//     console.log("Hello How are you?,Welcome in function of javascripts ")
// }
// test()
// //2.
// let n=96;
// let m=89;
// let l=89;
// let o=67;
// function demo(a, b) {
//     if (a > b) {
//         sum = a + b;
//         console.log("sum of two number", sum)
//     }
//     else {
//         mul = a * b
//         console.log("multiple of two number", mul)
//     }
// }
// demo(36, 89)
// test()
// demo(100, 555)
// test()
// demo(1000, 555)
// test()
// demo  (m,l)
// demo  (n,o)


// demo (3 ,5)

// demo(2,4)
//3.slet total;

const Expression = (a, b, c, d) => {
    
    if (a > c && b < d) {
        
        total = a * c + b / d;
        
    }
    
    else {
        total = a + b + c + d;
        
    }
    return total;

    
}
let result = Expression(1, 3, 5, 7)
console.log("Calculation of four number :", result)

let result1 = Expression(2, 8, 16, 48)
console.log("Calculation of any four number in number system:", result1)

let result3 = Expression(142, 3, 140, 7)
console.log("Calculation of any four number in number system  multiplication:", result3)


// Anynamous function


//  let demo =function(){
    
    // }



// setTimeout(() => {
    
// }, timeout);
    setTimeout(function(){
        console.log("Welcome to Nepal");
    },3000);