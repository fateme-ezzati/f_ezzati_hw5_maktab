case_insensitive_search('hello world', 'Hello')
case_insensitive_search('hello world', 'hello') 
case_insensitive_search('hello world', 'hi') 

function case_insensitive_search(str,word){
    if(typeof str !=='string'){
        return console.log('invalid string!')
    }

    return console.log(`search ${word} is==> `,str.toLocaleLowerCase().includes(word.toLocaleLowerCase()))
}