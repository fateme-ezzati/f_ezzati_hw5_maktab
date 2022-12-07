let arr = ["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e","x-z-p-j"]

generateNewArray(arr)

function generateNewArray(arr) {

    let list = []
    for (const key in arr) {
        arr[key].replaceAll('-', "").split('').map(function (item, index) {
            if (list[index]) {
                return list[index].includes(item) ? ' ' : list[index].push(item)
            } else {
                return list.push([item])
            }
        })
    }

    return console.log(list)
}