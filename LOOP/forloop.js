// let  i =1;

// for(i=1;i<=10;i++){
    //     document.write(i);
    // }
    
    // for(let h=10; h>=1;h--){
    //     document.write(h);
    // }


//loop pattern
// for(let j=1;j<=5;j++){


//     for(let m=1;m<=j;m++){
//         document.write("*") 
//     }
//     document.write("<br>")
// }
//loop pattern

// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
//Decending order

//NUMBER PATTERN 

// let i=1;

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){

//         document.write(j)
//     }
//     document.write("<br>");
// }

// NUMBER PATTERN IN REVERSE

// let i=1;

// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){

//         document.write(j)
//     }
//     document.write("<br>");
// }

//fACTORIAL NUMBER 

        //     let n=5;
        //         let fact =1;

        // for(let i=2;i<=n ; i++){
        //     fact =fact*i;    
        // }
        // document.write(fact)

    
//fibonacii

// 0  1  1  2  3 5  8  13

// let a = 0;
// let b = 1;
// const n = 10;

// document.write(a);
// document.write('\t');
// document.write(b);
// for(let i = 2; i <= n; i++) {
//     let c = a + b;

//     document.write(c);
//     document.write('\t');


//     a = b;
//     b = c;
// }
//sum of natural number

const n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum+i;
}

document.write("The sum of natural numbers up to " + n + " is: " + sum);
