function makeUniq(str){
    let myArr = []
    str.split('').forEach(ltr => {
        if(!myArr.includes(ltr)){
            myArr.push(ltr)
        }
    });
    return myArr.join('')
}

console.log(makeUniq('effective'))