console.log("Hello World");
// The Objective Is To Eliminate Printing The Same Thing Twice. 
let arr = ["test", "test",5,2,2,1,1,"Hello", "Hello", "World", "World"]
let newArr = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] == arr[i-1]) {
    arr.splice(i,1);
  } 
}

console.log(arr);