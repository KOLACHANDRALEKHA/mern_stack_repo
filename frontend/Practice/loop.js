// // Loop---
// // 1
// // 2
// // 3
// // 4
// // 5
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// // Types of loop---


// // for
// // while
// // do-while
// // for-in

// //for(initialization; condition ; update statement){
// //statement
// // }
//  for(i=1;i<=5;i=i+1){
//     console.log(i);
//  }

//  //initialization;
//  //while(condition){
//  //   statement ;
//  // update statement;
//  //}

//  var i = 1;
//  while(i<=5){
//     console.log(i);
//     i=i+9
//  }

//  //initialization
//  // do {
//  // statement
//  // update statement
//  //} while(condition)

//  var i =1;
//  do{
//     console.log(i);
//     i=i+1;
//  }while(i<=10)


//  //for in--

//  var user ={
//     name:"test",
//     age:20,
//     email:"test@gmail.com"
//  }

//  for (u in user){
//     console.log(user[u])
//  }

//  //console.log(user['name'])
// //  console.log(user.name)
// //  console.log(user.age)
// //  console.log(user.email)

// var ar = [40,50,60,49]
// for(i of ar){
//     console.log(i)
// }

// for(i=0;i<ar.length;i++){
//     console.log(i,ar[i])
// }

// 1-10
// var i =1;
// var s = 0;
// while(i<=10){
//     s = s+1;
//     i =i+1;
// }
// console.log("sum=",s)

// WAP to check alphapet is vowel or not

// wap to reverse a number
// 132=231
// wap to check number is palindrome or not
// 121 == 121

// wap to find sum of all digit of a number --123-6

function checkEven(){
    var output = document.getElementById("output")
    output.style.color="red"
    var n = 20;
    if(n%2===0){
        output.innerHTML="number is even"
    }else{
        output.innerHTML="number is odd"
    }
}