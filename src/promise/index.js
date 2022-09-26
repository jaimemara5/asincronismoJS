const promise = new Promise(function (resolve, reject){
    resolve('hey!');
});

const cow = 5;
const countCows = new Promise(function(resolve, reject){
    if (cow > 10){
        resolve(`There are ${cow} cows on the farm. We can continue`);
    }
    else {
        reject('There are not enought cows');
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('Finally'));