
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

Array.prototype.custom_filter = function (someFunction){
    const result=[]
    for(let i =0;i<this.length;i++){
        if(someFunction(this[i],i,this)){
            result.push(this[i])
        }
    }
    return result
}

// const myArr = [1,2,3,4,5,6,7,8,9]
// console.log(myArr.custom_filter((value)=>(value>5)))

//my own reduce

Array.prototype.custom_reduce = function (someFunction,initialValue){
    let acc = initialValue
    for(let i=0;i<this.length;i++){
        acc=someFunction(acc,this[i],i,this)
    }
    return acc
}

// const myArr = ["BA","NA","NA"]
// console.log(myArr.custom_reduce((acc,val)=>(acc+val),""))