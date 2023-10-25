function myReducer (callback, initialValue){

    if(!this) throw new Error ('Array is not defined')
    
    var array = this
    var length = array.length
    var index = 0
    var accumulator

    if(!length){
        if(initialValue) return initialValue
        throw new Error('You need to provide initial value if array is empty')
    }

    if(initialValue){
        accumulator = initialValue
    }else{
        accumulator = array[index++]
    }

    while(index < length){
        accumulator = callback(accumulator,array[index],index++,array)
    }
    
    return accumulator
}

Array.prototype.myReducer = myReducer

const array = [1,4,8,9,3,2,3]

const res = array.myReducer((acc,cur)=>{
    return acc+ cur
},0)

console.log(res)