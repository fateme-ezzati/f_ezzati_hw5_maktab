// arrayDepth([-1, 12, 20])
arrayDepth([10, [25, 13],2, [14, [55]]])

function arrayDepth(arr,depth){
    if(!Array.isArray(arr)){
        return console.log('unvalid input')
    }

    let current_depth = depth?depth:1
    let len = arr.length
    for(let i = 0 ;i <len;i++){
        if(Array.isArray(arr[i])){
            arrayDepth(arr[i],current_depth++)
        }
    }
    
    return console.log(arr,'depth is:',current_depth)
}