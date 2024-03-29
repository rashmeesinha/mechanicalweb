const bundleArray = [
  { id: 1,
    ques: "Printing 1 to 10 after each 1 second using let.",
    sol:'We need to print 1 to 10 after a 1 sec using let variable only',
    ans: `for(let i=1;i<=10;i++){

     setTimeout(()=>
      console.log(i),i*1000);
    }`,
  },
  { id: 2,
    ques: "Printing 1 to 10 after each 1 second using var.",
    ans: `for(var i=1;i<=10;i++){
        function interval(x){
            setTimeout(()=>
             console.log(x),x*1000);
         }
        interval(i);    
    }
        `,
  },
  { id: 3,
    ques:'How to reverse a string, each word of the sentence should be reversed?',
    ans:`let str="Hello World";
let str1="";
str1=str.split(" ").map((word)=>
    word.split("").reverse().join(""));
    
console.log(str1.join(" "));
    `
  },
  { id: 4,
    ques:'How to reverse a string, whole sentence should be reversed?',
    ans:`let s="Hello world";
console.log(s.split("").reverse().join(""));`
  },
  { id:5,
    ques:'Print whether a number is armstrong no. or not in JS',
     ans:`let n=153;
let arm=0,rem=0,n1=n;
console.log(n1);
while(n1>0){
    rem=parseInt(n1%10);
    arm=arm+(rem*rem*rem);
    n1=parseInt(n1/10);
}
    
if(arm==n)
    console.log("Armstrong No.");
else
    console.log("not an armstrong no.");`
  },
  { id:6,
    ques:'How to remove duplicate from array : arr=[1,2,4,2,4,5,2,1,6,7]?',
    ans:`    let arr=[1,2,3,4,5,3, 
       3,4,2,5,0];
    let arr1=[];
    
    
    for(let i=0;i<arr.length;i++){
        if(arr1.indexOf(arr[i])===-1)
        arr1.push(arr1[i]);
    }
    console.log(arr1);
    `
  },
  { id: 7,
    ques:'Sort an array of number.',
    ans:`    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b)
      {return a- b});

    console.log(points);
    `
  },
  { id: 8,
    ques:'Write an example for Closure.',
    ans:`   function a(){
        let n=1;
        function b(){
            console.log(n);
        }
        return b();
        
    }
    console.log(a)
    `
  },
  { id: 9,
    ques:'Call an inner function multiple times from outside',
    ans:`   function a(input){
        let n=1;
        function b(arg){
            console.log(n,arg);
        }
        return b(input);
        
    }
    a("hi");
    a("hello");
    a("world");`
  },
  { id: 10,
    ques:'Print the no. of occurrences of each letter in a string.',
    ans:`   let str="Welcome to Earth";
    str=str.toLowerCase();
    let obj={};
    
    
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]]=1;
        }
        else
        obj[str[i]]++;
    }
    
    
    console.log(obj);
    `
  },
  { id: 11,
    ques:'How to iterate over JS object.',
    ans:`   let obj = {
      name: "hello",
      id: {
        n1: "abc",
        n2: "xyz",
        n3: "qwe",
      },
      age: 25,
    };
    
    Object.entries(obj.id).map(
      (item) => console.log(item)
      );
    `
  },
  { id: 12,
    ques:' How to print pair to element which is equal to a particular number.',
    ans:`  const arr = [1, 0, 13, 24, 6, 
       7, 8, 9, 10];
    const k=13;
    let obj={};
    function fun(){
      for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
          if(arr[i]+arr[j]==k)
          obj[arr[i]]=arr[j];
        }
      }
      console.log(obj);
    }
    fun();
    `
  },
  { id: 13,
    ques:'Flatten the array without using flat():',
    ans:`  let arr = [1, 2, 3, [4, 5, [6]]]; 
  //[1,2,3,4,5,6]
  let result = [];    
  function flatArray(arr) {    
    for (let i = 0; i < arr.length; i++) {
      console.log(typeof arr[i]);
      if (typeof arr[i] === "object") {
        flatArray(arr[i]);
      } else result.push(arr[i]);
    }
  return result;
  }   
  console.log(flatArray(arr));
  
let arr = [1, 2, 3, [4, 5, [6,[7,8]]]]    
var flatten=arr.join(",").split(",");
console.log(flatten); 
    `
  },
  { id: 14,
    ques:'Print the reshuffled array by given number',
    ans:`   let arr=[1,2,3,4,5,6] 
    // [ 4, 5, 6, 1, 2, 3 ]
    let n=3
    
    
    function reshuffle(arr,n){
        for(let i=0;i<n;i++){
            arr.unshift(arr.pop())
        }
        return arr;
    }
    console.log(reshuffle(arr,n))
    `
  },
  { id: 15,
    ques:'Print the fibbonacci series until a given numbers.',
    ans:`   function fib(n) {
      let fibS = []
      let a = 0;
      let b = 1;
      fibS.push(a);
      fibS.push(b);
      for (i = 0; i <= n ;) {
        let c = a + b
        fibS.push(c);
        a = b;
        b = c;
        i = a+b;
      }
      return fibS
    
    }
    console.log(fib(15))
    `
  },{
    id:16,
    ques:'Write a program to print all combination of the given String. Ex – ABC: ABC, BCA, CAB, CBA, BAC, ACB',
    ans:`   function permute(str, l, r) {
      if (l == r) {
        console.log(str);
      } else {
        for (let i = l; i <= r; i++) {
          str = swap(str, l, i);
          permute(str, l + 1, r);
          str = swap(str, l, i);
        }
      }
    }
    
    function swap(a, i, j) {
      let temp;
      let charArray = a.split("");
      temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
      return charArray.join("");
    }
    
    let str = "ABCD";
    let n = str.length;
    permute(str, 0, n - 1);
    
    `
  },
  { id:17,
    ques:'How to flatten a deeply nested Object:',
    ans:`
    let obj = {
      name: {
        firstName: "John",
        lastName: "Doe",
        fathersName: {
          fName: "John",
          lName: "Doe",
        },
      },
      address: "test",
      contact: {
        countryCode: "+91",
        phone: "1234567890",
      },
    };
    
    function traverseObject(obj, s) {
      for (let key in obj) {
        if (typeof obj[key] == "object") {
          if (s == "") s = s + key;
          else s = s + "-" + key;
          traverseObject(obj[key], s);
          s = "";
        } else {
          if (s == "") console.log(s + key + ": " + obj[key]);
          else console.log(s + "-" + key + ": " + obj[key]);
        }
      }
    }
    
    console.log(traverseObject(obj, ""));
    
    `
    
  },{
    id:18,
    ques:'How to check an array in JS?',
    ans:`
    let arr=[12,3,5]
    console.log(Array.isArray(arr)) //true
    `
  },{
    id:19,
    ques:'Give an example for Infinite Currying implementation.',
    ans:`
    function sum(a){
      return function(b){
          if(!b)
          return a
          else
          return sum(a+b)
      }
  }

  console.log(sum(1)(2)(2)(4)())
    `
  },{
    id:20,
    ques:'Give an expample for normal currying implementation.',
    ans:`
    function sum1(a){
      return function(b){
          return function(c)
         {
          return a+b+c;
         } 
      }
  }
  
  console.log(sum1(1)(2)(2))`
  },{
    id:21,
    ques:'Given two strings, return true if they are anagrams of one another',
    ans:`
    let x = "army";
let y = "mary";


function anagram(a, b) {
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  
  if (a == b) return true;
  else return false;
}

console.log(anagram(x, y));
`
  },
  {
    id:22,
    ques:'Write a Program to merge 2 sorted array',
    ans:`
    let arr1=[1,2,6,9,15]
let arr2=[3,7,8,10,12,20]

let n1=arr1.length;
let n2=arr2.length;

function merge(arr1,arr2,n1,n2){

    let arr3=[]
    let i=0
    let j=0
    let k=0
    while(i<n1&& j<n2){
        if(arr1[i] < arr2[j]){
            arr3[k++]=arr1[i++]
        }
        else{
            arr3[k++]=arr2[j++]
        }
    }

    while(i<n1){
        arr3[k++]=arr1[i++]
    }

    while(j<n2){
        arr3[k++]=arr2[j++]
    }
return arr3;
}
console.log(merge(arr1,arr2,n1,n2))
`
  },{
    id:23,
    ques:'how to implement mergesort algo',
    ans:`
    let array=[10,3,2,9,8,6,5]
let L=0;
let R=array.length
let n=array.length

function merge(arr,l,m,r){
    let n1=m-l+1;
    let n2=r-m;

    let arrL=[]
    let arrR=[]

    for(let i=0;i<n1;i++){
        arrL[i]=arr[l+i]
    }

    for(let j=0;j<n2;j++){
        arrR[j]=arr[m+1+j]
    }
    let i=0;
    let j=0;
    let k=l
    while(i<n1 && j<n2){
        if(arrL[i]<=arrR[j]){
            arr[k++]=arrL[i++]
        }
        else
        arr[k++]=arrR[j++]
    }
    while(i<n1){
        arr[k++]=arrL[i++]
    }
    while(j<n2){
        arr[k++]=arrR[j++]
    }
}

function sort1(arr,l,r){
    if(l>=r)
    return

    let m=l+parseInt((r-l)/2)

    sort1(arr,l,m)
    sort1(arr,m+1,r)

    merge(arr,l,m,r)
}
sort1(array,0,array.length-1)
console.log(array)
`
  }
 
 
 
 
];

export default bundleArray;
