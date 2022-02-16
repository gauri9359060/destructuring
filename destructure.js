//1.
const obj = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }

let {name,password} = obj;
console.log(`name is: ${name}\n password is: ${password}`)

//2.

const obj = {  name: 'masai', address: {  pincode: 560095 }  }
let {address:{pincode:pin}} = obj;
console.log("Pincode is",pin)

//3.
const numbers = [ 100, 200, 500, 600 ];
const [num1, num2] = numbers;
console.log(`first number : ${num1}\nsecond number:${num2}`); 

//4.
const arr = [100, [50,60,70]]
        let [num1,[a,b,c]] =arr;
        console.log(a)

//5.
let newArr = [  1, {  
    arr: [ 1, 2, 3 ]
  }
] 

let [num, {arr:[,b,c]}] = newArr

const arr2 =[];
arr2.push(b,c)
console.log(arr2)