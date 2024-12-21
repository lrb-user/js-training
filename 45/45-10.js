const promis = new Promise((resolve, reject) => {
    if(/*비동기처리 성공*/){
        resolve('result');
    }else{
        reject('failure reason')
    }
})