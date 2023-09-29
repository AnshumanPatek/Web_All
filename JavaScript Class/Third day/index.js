let nums = [12, 34, 56, 78, 90];
// var value = new Arrays(12, 34, 56, 78, 90);
for (let i = 0; i <= nums.length; i++) {
  console.log(nums[i]);
}
for (value in nums) {
  console.log(value);
}
for (value of nums) {
  console.log(value);
}
nums.forEach((nums) => console.log(nums));
console.log("check new things");
function sum (num1,num2){
    return num1+num2;
}
function mul (num1,num2){
    return num1*num2;
}
const div = (num1 , num2)=>{
    return num1/num2;
}
const sub =()=>{
    let num1=window.prompt("Enter the number");
    let num2=window.prompt("Enter the number");
    window.alert("subtract is = "+ (num1-num2));
}

console.log(sum(5,6));
console.log(mul (5,6));



const subt = ()=>{
 
    let num1 = parseInt(window.prompt("Enter number 1"));
    let num2 = parseInt(window.prompt("Enter number 2"));
    let num3 = parseInt(window.prompt("Enter number 3"));
    var check = window.confirm("do you want sub");
    if(check){
     window.alert("subtract is = "+(num1 - num2));}
    else{
        window.alert("your choice is not sub")
    }
}