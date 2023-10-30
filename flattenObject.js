
function flattenObject (obj){
    return Object.keys(obj).reduce((acc,key)=>{
        if(typeof obj[key] ==='object'){
            const nestedObj=flattenObject(obj[key])  
            for (const nestedKey in nestedObj) {
                // console.log(key,nestedKey)
                console.log(`${key}.${nestedKey}` ,nestedObj[nestedKey])
                acc[`${key}.${nestedKey}`] = nestedObj[nestedKey];
              }          
        }else{
            console.log(key,obj[key])
            acc[key]=obj[key]
        }

        return acc
    },{})
}

const object = {
    name:'kartik',
    age:25,
    address:{
        city:'windsor',
        state:'ontario',
        country:'canada',
        home:{
            number:'419',
            street:'welligton'
        },
        localities:['tim','riverside']
    }
}

console.log(flattenObject(object))