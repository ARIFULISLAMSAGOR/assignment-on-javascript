
function cubeNumber(number){
    if(typeof number==='number'){
        const result=Math.pow(number,3);
        return result;
    }
    else{
        return 'it is string';
    }
   
}
const output=cubeNumber(4);
// console.log(output);


function matchFinder(string1,string2){
if((typeof string1 && typeof string2 !=='string') ||(typeof string1 !=='string' || typeof string2 !=='string')){
  return 'it is not string'
}
else{
    if(string1.includes(string2)){
        return 'true';
    }
    else{
        return false;
    }

}
}
let result=matchFinder('John Doe','ohn')
// console.log(result);


    
 function sortMaker(arr){
    if(arr.some(item => item<0)){
     return 'invalid input'
    }
    if(arr[0] === arr[1]){
        return 'equal';
    }
     if(arr[0]>0 && arr[1]>0){
        return arr.sort((a,b)=>b-a);
    }
  
 }
 let inputArray=[2,3]
 let outputArray=sortMaker(inputArray);
//  console.log(outputArray);


function findAdress(obj){
    if(typeof obj !=='object'){
        return 'please provide me a valid object';
    }
    else{
        const street=obj.street || '_';
        const house=obj.house || '_';
        const society=obj.society || "_";

        return street+','+house+','+society;

    }

}
const adress={
    street:10,
    house:'15A',
    society:'Earth Perfect'
};
// console.log(findAdress(adress));


function canPay(changeArray,totalDue){
    if(changeArray.length === 0){
        return "empty array add something"
    }
    const totalArray=changeArray.reduce((sum,taka)=>sum+taka,0);
    if(totalArray>=totalDue){
        return true;
    }
    else{
        return false;
    }

}
const totalArray=[1,5,5];
const totalDue=10;
const totalCoast=canPay(totalArray,totalDue);
// console.log(totalCoast);

