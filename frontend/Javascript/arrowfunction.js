// let user = {
//     name:"lekha",
//     show:()=>{
//         console.log(this)//window
//         console.log("hello in arrow",this.name)
//     },
//     show2:function(){
//         console.log(this)//user
//         console.log("hello in normal",this.name)
//     }
// }

// user.show();
// user.show2();

//map function


let arr = [10,20,30,40]
// let arr2 = [20,40,60,80]
let arr2 = [];

for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]*2)

}

// let arr2 = arr.map(function(item,index){
//     console.log(item,index,arr)
//     return item*2;
// })

console.log(arr2)
//map function job is exceute the function foreach element then return the element