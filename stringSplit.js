function split(string, delim){
    const res = []
    if(delim=='') return Array.from(string)

    function startSplit(str,indx){
        if(indx>=string.length) return 

        const delimIndex = str.indexOf(delim)
        if(delimIndex>=0){
           res.push(str.substring(0,delimIndex))
           startSplit(str.substring(delimIndex+delim.length), delimIndex+delim.length)
        }else{
            res.push(str)
        }
    }

    startSplit(string,0)
    return res
}

console.log(split("hello ,kartik, how are u",","))
console.log(split("hello ,kartik, how are u",""))
console.log(split("hello ,kartik, how are u","o"))