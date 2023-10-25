Array.prototype.myMap = function(callback){
     const output = []

     this.forEach((el,indx)=>{
        output.push(callback(el,indx,this))
     })

     return output
}

console.log([1,2,3,4].myMap(el=>el*10))