const promise = new Promise(function(resolve, reject) {
    resolve('Hey');
})

const cow = 15;

const countCows = new Promise(function(resolve, reject){

    if (cow > 10) {
        resolve(`We have ${cow} cows on the farm`);
    }
    else {
        reject('There is no cows');
    }
});

countCows.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(() => console.log('Finally'))