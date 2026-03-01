
//my own forEach

Array.prototype.custom_forEach = function (someFunction){
    for(let i=0;i<this.length;i++){
        someFunction(this[i],i,this)
    }
}

// const myArr = ["italian","indian","mexican"]
// myArr.custom_forEach((val)=>(console.log(val+" cuisine")))

//my own map

Array.prototype.custom_map = function (someFunction){
    const result = []
    for(let i = 0;i<this.length;i++){
        result.push(someFunction(this[i],i,this))
    }
    return result
}

// const myArr = [1,2,3]
// console.log(myArr.custom_map((val)=>(val*10)))

//my own filter