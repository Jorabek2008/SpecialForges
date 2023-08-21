"use strict"
// const today = new Date();
// console.log(today);
// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(Date.now()/1000/60/60/24/365);



// function randomAll(){
//     let i = 0;
//     let rand1 = parseInt(prompt("son kiriting:"));
//     while(i<rand1){
//         var rand2 = parseInt(Math.random()*10);
//         if(rand1==rand2){
//             console.log("siz yutdingiz 🏆",rand1,rand2);
//             break;
//         }else if(rand1>rand2){
//             console.log("sal teparoqqa chiqing ⬆️",rand1,rand2);
//         }else if(rand1<rand2){
//             console.log("sal pastroqqa tushing ⬇️",rand1,rand2);
//         }
//     }
// }
// randomAll()



// function myFunck(){
//     let i = 1;
//     let x = 1;
//     while(i>0){
//         x*=i;
//         i=+prompt("son kiriting..");
//     }
//     console.log(x);
// }
// myFunck()



// function num (number){
//     number = prompt();
//     let str = number.toString();
//     let huge = 1;
//     let i=0;
//     while(i<str.length){
//         let all = parseInt((number/huge)%10);
//         huge*=10;
//         i++;
//     }
//     console.log(i);

// }
// num();



// function pal(palindrom = 123){
//     let b = 0;
//     let c= 1;
//     let start;
//     let end;
//     let palStr = palindrom.toString();
//     for(let i = 1;i<=parseInt(palStr.length/2);i++){
//         start = palStr[b];
//         b+=i;
//         end = palStr[palStr.length - c];
//         c+=i;
//         if(start==end){
//             console.log("palindrom son");
//         }else if(start!=end){
//             console.log("palindrom son emas");
//             break
//         };
//     }
// }

// pal();




// function school(){
//     let push1 = `<table></table>`
//     let push2;
//     let push3;
//     for(let i=1;i<=4;i++){
//         push2 = `<tr></tr>`
//         for(let n = 1;n<=4;n++){
//             push3 = `<td>${n}</td>`
//             console.log(`
//             <tr>
//                 ${push3}
//             </tr>
//             `);
//         }
//     }
// }
// school();


// function check(){
//     let checkUser = [
//         {
//             email: 'ozodbek@tenx.uz',
//             password: 'ozod123'
//         },
//         {
//             email: 'alibek@tenx.uz',
//             password: 'ali123'
//         },
//         {
//             email: 'ilyos@tenx.uz',
//             password: 'ilyos234'
//         },
//     ];
//     let checkUser1 = {
//         email: 'ilyos@tenx.uz',
//         password: 'ilyos234'
//     };
//     for(let i=0;i<checkUser.length;i++){
//         if(checkUser[i].email==checkUser1.email&&checkUser[i].password==checkUser1.password){
//             return true 
//         }
//     }
//     return false
// }
// console.log(check());
// console.log()

