// arrayDepth([-1, 12, 20])
flatArray([10, [25, 13],2, [14, [55]],4])


function flatArray(arr,flatArr){
    if(!Array.isArray(arr)){
        return console.log('unvalid input')
    }
    let current_flatArr = flatArr?flatArr:[]
    let len = arr.length
    for(let i = 0 ;i <len;i++){
        if(Array.isArray(arr[i])){
            flatArray(arr[i],current_flatArr)
        }else{
            current_flatArr.push(arr[i])
        }
        
    }

    return console.log('flatArr is:',current_flatArr)
}