function fetchData(callback){
    setTimeout(()=>{
        
        callback("Data fetched successfully")
    }, 1000)
}

fetchData(data=>{
    console.log(data)
})