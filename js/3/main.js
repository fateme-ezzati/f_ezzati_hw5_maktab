separators(-20301548)
separators(1000)

function separators(num){
    if(typeof num !=='number' || parseInt(num)!==num){
        return console.log('unvalid data')
    }

    return console.log(num.toLocaleString())

}