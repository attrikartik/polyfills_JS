function createSetTimeout(){

    // stores current timere id
    var timerId = 0
    // map to store if timer is in map
    var timerMap = {}

    // initiate callback
    function setTimeoutPoly (callback,delay) {

        // generate current timer id
        var currentTimerId = timerId++

        // insert timer into map
        timerMap[currentTimerId] = true
        
        // start counter for timer
        var start = Date.now()

        // func to trigger callback()
        function triggerCallback (){

            // if timer is not in map move on
            if(!timerMap[currentTimerId]) return

            // if timer expired, execute callback()
            if(Date.now() > start + delay){
                callback()
            }else{
                // else move on
                requestIdleCallback(triggerCallback)
            }
        }
        // initiate trigger callback()
        requestIdleCallback(triggerCallback)

        // current timer id is returned
        return currentTimerId
    } 

    // func() to clear timer
    function clearSetTimeout(id){
        delete timerMap[id]
    }
   
    // return final obj
    return {setTimeoutPoly,clearSetTimeout}
}

// create instance
var {setTimeoutPoly,clearSetTimeout} = createSetTimeout()

console.log("start")

// execute callback()
const myId = setTimeoutPoly(function(){
    console.log('Inside set timeout')
},2000)

console.log("end")