function a(x,y){
  return 5;
}
console.log(a(5,5))
//Console.log: 5


function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));
//Console.log: [2,5,5],[2,5,5],[6,8,5],[6,8,5]


function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 y = a(2);
 y.push(5);
 console.log(y);
 //Console.log: [2,2,5]


function a(x){
    if(x[0] < x[1]) {
       return true;
    }
    else {
       return false;
    }
 }
 b = a([2,3,4,5])
 console.log(b);
 //Console.log: true


function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding";
      }
    }
    return x;
}
console.log(a([1,2,3,4]))
//Console.log : [Coding,Coding,Coding,Coding]


function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))
//Console.log: [5,'Coding','Dojo',4]


function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 b = a([5,10])
 console.log(b);
//Console.log: 10


function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
//Console.log : null


function printAverage(x){
    sum = 0;
    for(var i = 0 ; i < x.length ; i++){
        sum += x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); 
//console.log: 1
y = printAverage([2,5,8]);
console.log(y);
//console.log: 2.66


function returnOddArray(){
    var arr=[];
    for(var i = 1; i <= 255; i+=2){
        arr.push(i);
    }
    return arr;
 }
 y = returnOddArray();
 console.log(y);
//console.log: [1,3,5,7,9,11,13,15,17,,,,,,va a ir de 2 en 2 hasta el 255]


function squareValue(x){
    for(var i = 0; i < x.length ; i++){
        x[i]=x[i]*x[i];
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y);
//console.log: [1,4,9]
 y = squareValue([2,5,8]);
 console.log(y); 
//console.log: [4,25,64]