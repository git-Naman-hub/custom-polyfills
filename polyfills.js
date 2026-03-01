
//my own forEach

Array.prototype.custom_forEach = function (someFunction){
    for(let i=0;i<this.length;i++){
        someFunction(this[i],i,this)
    }
}

// const myArr = ["italian","indian","mexican"]
// myArr.custom_forEach((val)=>(console.log(val+" cuisine")))
