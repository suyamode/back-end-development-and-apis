const express=require('express');
function isPrime(num){
    if(typeof(num)!== 'number'|| !Number.isInteger(num))
        return 'Please enter a valid number';
    if(num<0 || num===1)
        return false;
    for(let i=2;i*i<=num;i++){
        if(num!==2 && num%i===0)
            return false
    }
    return true;
}
console.log(isPrime(37));
module.exports={isPrime};