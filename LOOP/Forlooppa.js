// //syntax of for loop

// // for(initilazation;condition; increment/decrement){
// //     ......code tobe excuted
// // }




// // let i=1;

// // let n =100;

// // for(i=1; i<=n; i++){
// //     document.write(i)

// //     document.write("\t");
// // }
// // Example no 1 :sum of natural number 

// // let n =100;
// // let sum=0;
// // for( let i=1; i<=n; i++){
// //       sum = sum+i;     
// //      document.write("\t");
// //     }
// //     document.write(sum)

// // Example no 2:mul of natural number
// // let m= 5;
// // let mul=1;

// // for(let i=1; i<=m;i++){
// //     mul = mul*i;
    
// // }
// // document.write(mul)



// // print natural number using for lopp  desending order

// // let n=100;
// // for(let i=n; i>=1;i--){
// //     document.write("\t");
// // document.write(i)

// // }


// //print even number using for loop
// // let i=1;

// // let n =100;

// // for(i=2; i<=n; i=i+2){
  
  
// //     document.write(i)

// //     document.write("\t");
// // }







// // odd number 
// // let i=1;

// // let n =100;

// // for(i=1; i<=n; i=i+2){
  
  
// //     document.write(i)

// //     document.write("\t");
// // }
// //factorial number
//     //  let n=prompt("enter a factorial number find");
//     //             let fact =1;

//     //     for(let i=2;i<=n ; i++){
//     //         fact =fact*i;    
//     //     }
//     //     document.write(fact)

// //prime number 


// // var count=0;
// // let n=7
// // for(i=1;i<=n;i++){
// // if (n%i==0){
// //     count ++;
   
// // }

// // }
// // if(count==2){
        
// //     document.write("prime number ")
// // }
// // else {
    
// //     document.write("not a prime number ")
    
// // } 

// //print prime number in between 1  -100

// // for(let i=2;i<=100;i++){

// // for(j=2;j<=i;j++){

// // if(i%j==0){

// // }


// // }



// //}


// let n=prompt("Enter the number checked prime or not")


// let i=1;

// count =0;

// for(i=1;i<=n;i++){

// if(n%i==0){
//     count++
// }
// }

// if(count==2){
//     document.write(+n+"prime number" )
// }
// else{
//     document.write(+n+" not prime number" )





// }




count =0;
// let n = prompt("Enter number from user ");
for (let i = 1; i <= 100; i++) {


  for(j=2;j<=i-1;j++){


if(i%j==0){
  count =count+1;
}    

  }





if(count==0){
  console.log(i)
}
  else{
    count =0;
  }
  
  }









