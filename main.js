
// Write one example explaining how you can write a callback function ?

function fun1(msg, callback) {
    console.log(msg);
    callback();
}
function fun2() {
    console.log('welcome to js');
}

fun1('hello', fun2);


// op:
// hello
// welcome to js

// //<--------------------------------------------->

// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function printnumber(n,time){
    setTimeout(function(){
        console.log(n)
    },time);
}

printnumber(1,1000);
printnumber(2,2000);
printnumber(3,3000);
printnumber(4,4000);
printnumber(5,5000);
printnumber(6,6000);
printnumber(7,7000);

// //<--------------------------------------------->

// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function callbackhell(){
    setTimeout(() =>{
        console.log(1);
        setTimeout(()=>{
        console.log('2');
        setTimeout(()=>{
            console.log('3');
            setTimeout(()=>{
                console.log('4');
                setTimeout(()=>{
                    console.log('5');
                    setTimeout(()=>{
                        console.log('6');
                        setTimeout(()=>{
                            console.log('7');
                            setTimeout(()=>{
                                console.log('8');
                                setTimeout(()=>{
                                    console.log('9');
                                    setTimeout(()=>{
                                        console.log('10');
                                        },10000);
                                    },9000);
                                },8000);
                            },7000);
                        },6000);
                    },5000);
                },4000);
            },3000);
        },2000);
    },1000);
}
callbackhell()


// for(let i = 0; i <= 10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }



//<--------------------------------------------->

// Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 


function promfunction(number){
    return new Promise((res,rej) => {

        if(number != 0){
            res('Promise Resolved');
            }
             else{
                rej(' Promise Rejected');
            }
    })
}


promfunction(5).then((data)=>{
    console.log(data);
})
.catch((data2)=>{
    console.log(data2);
})


//<--------------------------------------------->

// Create examples to explain callback function


function myfun1(name, callback) {
    console.log(name);
    callback(myfun3);
}
function myfun2(callback2) {
    console.log('welcome to js');
    callback2()
}
function myfun3(){
    console.log('this is callback function');
}

myfun1('hi jhon', myfun2);

// op:
// hi jhon
// welcome to js
// this is callback function

// myfun1 callback to myfun2,after myfun2 callback to myfun3(myfun1--->myfun2--->myfun3)

//<--------------------------------------------->

// Create examples to explain callback hell function

function cbhfunex(){
    setTimeout(() =>{
        console.log('Front End Languages:');
        setTimeout(() => {
            console.log('HTML');
            setTimeout(() => {
                console.log('CSS');
                setTimeout(() => {
                    console.log('JAVA SCRIPT');
                },4000)
            },3000)
        },2000)
    },1000);
}
cbhfunex();

// op:
// Front End Languages:
// HTML
// CSS
// JAVA SCRIPT

//<--------------------------------------------->

// Create examples to explain promises function

  function mypromfuntion(){
    return new Promise((res,rej) => {
        let value = false;

        if (value) {
            res("sucess");
          } 
          else {
            rej("not sucess");
          }
    })
  }
  mypromfuntion().then((msg) => {
    console.log(msg);
  })
  .catch((msg2) => {
    console.log(msg2);

  })

//<--------------------------------------------->

//   Create examples to explain async await function

async function myfuc() {
    console.log('hello this is html');
    console.log('hello this is css');

    await myfun2()

    console.log('hello this is java script');
}
function myfun2(){
    console.log('please wait myfun2 calling')
}

myfuc()

