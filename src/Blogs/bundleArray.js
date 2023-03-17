const bundleArray = [
  {
    ques: "Printing 1 to 10 after each 1 second using let.",
    ans: `for(let i=1;i<=10;i++){

     setTimeout(()=>console.log(i),i*1000);
    }`,
  },
  {
    ques: "Printing 1 to 10 after each 1 second using var.",
    ans: `for(var i=1;i<=10;i++){
        function interval(x){
            setTimeout(()=>console.log(x),x*1000);
         }
        interval(i);    
    }
        `,
  },
  {
    ques:'How to reverse a string, each word of the sentence should be reversed?',
    ans:`let str="Hello World";
let str1="";
str1=str.split(" ").map((word)=>
    word.split("").reverse().join(""));
    
console.log(str1.join(" "));
    `
  },
  {
    ques:'How to reverse a string, whole sentence should be reversed?',
    ans:`let s="Hello world";
console.log(s.split("").reverse().join(""));`
  },
  {
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
  {
    ques:'How to remove duplicate from array : arr=[1,2,4,2,4,5,2,1,6,7]?',
    ans:`    let arr=[1,2,3,4,5,6,1,2,3,3,4,2,5,0];
    let arr1=[];
    
    
    for(let i=0;i<arr.length;i++){
        if(arr1.indexOf(arr[i])===-1)
        arr1.push(arr1[i]);
    }
    console.log(arr1);
    `
  },
  {
    ques:'Sort an array of number.',
    ans:`    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a- b});

    console.log(points);
    `
  },
  {
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
  {
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
  {
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
 
];

export default bundleArray;
