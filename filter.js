Array.prototype.myFilter=function(callback){


    const output = []
    this.forEach((el,indx)=>{
        if(callback(el,indx,this)){
            output.push(el)
        }
    })

    return output
}

console.log([2,1,3,4,5,7,8,10].myFilter(el=>el%2===0))