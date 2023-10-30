function flattenArray (array){
    return array.reduce((acc,curr)=>{
            if(Array.isArray(curr)){
                acc = acc.concat(flattenArray(curr))
            }else{
                acc.push(curr)
            }
        return acc

    },[])
}

console.log(flattenArray([1,4,5,[3,2,[4,9,3,[3,[2]]]]]))